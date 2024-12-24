import Image from 'next/image';
import { cookies } from 'next/headers';
import { Pokemon, PokemonList } from '@/api/types';
import { use } from 'react';
import { getPokemonDex } from '@/api';
import { Button } from './ui/button';

interface Props {
  data: Promise<PokemonList>;
}

const randomNum = (max: number) => Math.floor(Math.random() * max);

const getTwoRandomPokemon = (results: Pokemon[]) => {
  return [
    {
      ...results[randomNum(results.length)],
    },
    {
      ...results[randomNum(results.length)],
    },
  ];
};

export const PokemonVote: React.FC<Props> = ({ data }) => {
  const { results } = use(data);
  const pokemons = getTwoRandomPokemon(results).map(pkmn => ({
    ...pkmn,
    dexNumber: getPokemonDex(pkmn.url),
  }));

  return (
    <>
      {pokemons.map(pokemon => (
        <form
          className='flex flex-col items-center w-[250px]'
          key={pokemon.name}
        >
          <input
            type='hidden'
            name='pokemonData'
            value={JSON.stringify({
              winner: pokemon.dexNumber,
              loser: pokemons.filter(
                pkmn => pkmn.dexNumber !== pokemon.dexNumber
              )[0].dexNumber,
            })}
          />

          <Image
            className='border border-neutral-900'
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.dexNumber}.png`}
            alt={pokemon.name.slice(0, 20)}
            width={250}
            height={250}
            style={{
              imageRendering: 'pixelated',
            }}
          />
          <div className='border border-neutral-900 border-t-0 w-full flex flex-col justify-center items-center py-2 w-[250px]'>
            <p className='leading-7 text-neutral-400'>#{pokemon.dexNumber}</p>
            <h3 className='w-full px-2 scroll-m-20 text-2xl font-semibold tracking-tight capitalize overflow-hidden text-center text-ellipsis whitespace-nowrap'>
              {pokemon.name.split('-').join(' ').slice(0, 20)}
            </h3>
          </div>
          <Button
            className='!bg-indigo-500 !text-white rounded-none w-full group'
            formAction={async formData => {
              'use server';
              const { winner, loser } = JSON.parse(
                formData.get('pokemonData') as string
              );

              // await recordBattle(winner, loser);

              const jar = await cookies();
              jar.set('refresh', 'ye');
            }}
          >
            <span className='group-hover:scale-125 duration-100'>Vote</span>
          </Button>
        </form>
      ))}
    </>
  );
};
