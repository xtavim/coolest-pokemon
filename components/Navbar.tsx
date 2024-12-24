import Link from 'next/link';
import { Brand } from './Brand';
import { Leaderboard } from './ui/Leaderboard';
import { AboutIcon } from './ui/AboutIcon';

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-6 md:px-20 py-4 w-full border-b border-neutral-900 sticky top-0 bg-neutral-950'>
      <Brand />

      <div className='flex gap-4 items-center'>
        <Link
          className='hover:scale-110 duration-150'
          href='/leaderboard'
          prefetch
        >
          <Leaderboard />
        </Link>

        <Link
          className='hover:scale-110 duration-150'
          href='/about'
          prefetch
        >
          <AboutIcon />
        </Link>
      </div>
    </nav>
  );
};
