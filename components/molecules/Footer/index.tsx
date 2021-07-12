import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='flex mt-auto py-4 pt-8'>
      <Link href='/'>
        <a className='mx-auto'>
          <img src='/icon.svg' className='w-12 h-12' />
        </a>
      </Link>
    </div>
  );
};

export default Footer;
