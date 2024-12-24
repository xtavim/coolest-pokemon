import Link from 'next/link';
import { Brand } from './Brand';
import { Leaderboard } from './ui/Leaderboard';

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-6 md:px-20 py-6 w-full border-b border-neutral-900'>
      <Brand />

      <div className='flex gap-2 items-center'>
        <Link
          className='hover:scale-125 duration-150'
          href='/leaderboard'
          prefetch
        >
          <Leaderboard />
        </Link>
      </div>
    </nav>
  );
};
