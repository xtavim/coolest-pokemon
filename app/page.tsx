import { Pokemon } from '@/components/Pokemon';
import { SkeletonPokemon } from '@/components/skeleton/Pokemon';
import { Suspense } from 'react';

const pokemonList = fetch('https://pokeapi.co/api/v2/pokemon/?limit=999999', {
  cache: 'force-cache',
  next: { revalidate: 2592000 },
}).then(res => res.json());

export default function Home() {
  return (
    <div className='flex justify-center px-20 grow'>
      <div className='w-full flex items-center justify-evenly'>
        <Suspense fallback={<SkeletonPokemon />}>
          <Pokemon data={pokemonList} />
        </Suspense>

        <Suspense fallback={<SkeletonPokemon />}>
          <Pokemon data={pokemonList} />
        </Suspense>
      </div>
    </div>
  );
}
