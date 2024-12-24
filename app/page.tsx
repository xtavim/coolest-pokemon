import { getAllPokemon } from '@/api';
import { PokemonList } from '@/api/types';
import { PokemonVote } from '@/components/PokemonVote';
import { Loader } from 'lucide-react';
import { Suspense } from 'react';

export default function Home() {
  const allPokemon = getAllPokemon();

  return (
    <div className='flex justify-center px-6 md:px-20 grow'>
      <div className='w-full flex flex-col md:flex-row items-center justify-evenly md:justify-center md:gap-32'>
        <Suspense fallback={<Loader className='animate-spin' />}>
          <PokemonVote data={allPokemon} />
        </Suspense>
      </div>
    </div>
  );
}
