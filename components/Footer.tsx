import Link from 'next/link';
import { GithubIcon } from './ui/GithubIcon';

export const Footer = () => {
  return (
    <footer className='flex items-center justify-center px-4 md:px-20 py-4 w-full border-t border-neutral-900'>
      <Link
        href='https://github.com/xtavim/'
        target='_blank'
        className='hover:scale-125 duration-150'
      >
        <GithubIcon />
      </Link>
    </footer>
  );
};
