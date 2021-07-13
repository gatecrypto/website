import React from 'react';
import Link from 'next/link';

import Footer from '../../components/molecules/Footer';
import Navbar from '../../components/molecules/Navbar';
import Card from '../../components/atoms/Card';

const Index = () => {
  return (
    <div className='relative h-mobile-screen md:h-screen flex flex-col'>
      <Navbar />
      <div className='absolute top-1/2 w-full flex transform -translate-y-1/2 md:-translate-y-full'>
        <Card width='w-5/6 md:w-1/2' className='mx-auto text-center space-y-4'>
          <p className='text-3xl md:text-4xl'>Developer Home</p>
          <p className='md:text-xl text-blue-800'>
            Gate is built by developers with developers in mind. Our goal is to
            provide accessible technology that can inspire an ecosystem of
            software. Let's build a better future together.
          </p>
          <div className='flex flex-col space-y-2'>
            <Link href='developers/contracts'>
              <a className='text-xl text-gray-500'>Contracts</a>
            </Link>
            <Link href='developers/pay-with-gate'>
              <a className='text-xl text-gray-500'>Pay with Gate</a>
            </Link>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
