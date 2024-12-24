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
  const pokemons = getTwoRandomPokemon(results);

  return (
    <>
      {pokemons.map(pokemon => (
        <form className='flex flex-col items-center' key={pokemon.name}>
          <Image
            className='border border-neutral-900'
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonDex(
              pokemon.url
            )}.png`}
            alt={pokemon.name}
            width={250}
            height={250}
            style={{
              imageRendering: 'pixelated',
            }}
          />
          <div className='border border-neutral-900 border-t-0 w-full flex flex-col justify-center items-center py-2'>
            <p className='leading-7 text-neutral-400'>
              #{getPokemonDex(pokemon.url)}
            </p>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight capitalize'>
              {pokemon.name.split('-').join(' ')}
            </h3>
          </div>
          <Button
            className='!bg-indigo-500 !text-white rounded-none w-full'
            formAction={async () => {
              'use server';
              // determine loser
              // post data
              const jar = await cookies();
              jar.set('refresh', 'ye');
            }}
          >
            Vote
          </Button>
        </form>
      ))}
    </>
  );
};
