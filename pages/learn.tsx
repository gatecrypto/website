import React from 'react';
import PageWrapper from '../components/atoms/PageWrapper';
import Navbar from '../components/molecules/Navbar';

const Learn = () => {
  return (
    <div>
      <Navbar />
      <PageWrapper>
        <div className='w-full md:w-3/5 space-y-4'>
          <p className='text-6xl'>Learn</p>
          <p className='text-lg md:text-3xl'>
            Gate isn't like other cryptocurrencies. From the start, Gate is
            developed to serve real world use cases.
          </p>
        </div>
        <div className='w-full md:w-3/5 space-y-4 mt-8 text-bold'>
          <p className='text-4xl'>Goals</p>
          <p className='text-2xl'>1. Generate Revenue</p>
          <p className='text-xl'>
            Gate is self-sufficient. While other coins generate revenue from
            large fees, Gate thrives from promoting transactions. Fees are kept
            to a minimum so it is viable for every purchase. The revenue created
            by the network will be used to further grow Gate's capabilities.
          </p>
        </div>
        <div className='w-full md:w-3/5 space-y-4 mt-8 text-bold'>
          <p className='text-2xl'>2. Community Focus</p>
          <p className='text-xl'>
            The Gate community is the beating heart of this revolution. This
            project is meant to create opportunities for everyone involved. From
            the small investor to the multinational business, Gate works for
            you.
          </p>
        </div>
        <div className='w-full md:w-3/5 space-y-4 mt-8 text-bold'>
          <p className='text-2xl'>3. Tech First</p>
          <p className='text-xl'>
            Gate is made by developers focused on creating accessible
            technology. Using the most performant frameworks and development
            workflows, Gate is designed in order to continually improve. Nearly
            all of Gate's technology is open-sourced, including this website.
          </p>
        </div>
      </PageWrapper>
    </div>
  );
};

export default Learn;
