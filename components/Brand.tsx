import Link from 'next/link';

export const Brand = () => {
  return (
    <Link href='/'>
      <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl'>
        COOL
        <span className='bg-gradient-to-r from-violet-600 to-indigo-600 inline-block text-transparent bg-clip-text'>
          EST
        </span>
      </h1>
    </Link>
  );
};
