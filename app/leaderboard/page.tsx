import { getLeaderboard } from '@/api/mock';
import Image from 'next/image';

export default function Leaderboard() {
  const leaderboard = getLeaderboard();
  return (
    <div className='flex flex-col items-center justify-center grow'>
      {leaderboard.map(pkmn => (
        <div className='flex border border-neutral-900' key={pkmn.dexNumber}>
          <Image
            className='border-r border-neutral-900 w-[150px] h-[150px] md:w-[250px] md:h-[250px]'
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn.dexNumber}.png`}
            alt={pkmn.name.slice(0, 20)}
            width={250}
            height={250}
            style={{
              imageRendering: 'pixelated',
            }}
          />
          <div className='p-4 w-[200px] md:w-[250px] flex flex-col items-center justify-center'>
            <h2 className='scroll-m-20 pb-2 text-xl md:text-3xl font-semibold tracking-tight'>
              {pkmn.name.slice(0, 20)}{' '}
              <span className='text-neutral-400 text-lg md:text-2xl'>
                #{pkmn.dexNumber}
              </span>
            </h2>
            <h3 className='scroll-m-20 text-lg md:text-2xl font-semibold tracking-tight flex gap-2 items-center'>
              <span className='text-green-400'>{pkmn.wins}W</span>
              <span className='text-red-400'>{pkmn.losses}L</span>
              <span className='text-md md:text-xl'>{pkmn.winRate}%</span>
            </h3>
            <p className='mt-2 text-sm font-bold text-neutral-500'>MOCK DATA</p>
          </div>
        </div>
      ))}
    </div>
  );
}
