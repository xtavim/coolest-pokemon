import { Brand } from './Brand';

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-20 py-6 w-full border-b border-neutral-900 '>
      <Brand />
    </nav>
  );
};
