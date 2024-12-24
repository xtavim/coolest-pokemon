import { PokemonDetails, PokemonList } from '@/api/types';
import Image from 'next/image';
import { use } from 'react';

const randomNum = (max: number) => Math.floor(Math.random() * max);

export const Pokemon = ({ data }: { data: Promise<PokemonList> }) => {
  const { results }: PokemonList = use(data);

  const pokemonRequest = fetch(results[randomNum(results.length)].url).then(
    res => res.json()
  );
  const pokemonData: PokemonDetails = use(pokemonRequest);

  const formatName = pokemonData.name.split('-').join(' ').toUpperCase();

  return (
    <button className='w-[550px] h-[550px] bg-neutral-900 rounded-3xl flex flex-col justify-center items-center'>
      <Image
        src={pokemonData.sprites.other['official-artwork'].front_default}
        alt={formatName}
        width={475}
        height={475}
      />
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
        {formatName}
      </h3>
    </button>
  );
};
