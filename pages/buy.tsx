import React from 'react';
import PageWrapper from '../components/atoms/PageWrapper';
import Footer from '../components/molecules/Footer';
import Navbar from '../components/molecules/Navbar';

const Buy = () => {
  return (
    <div style={{ minHeight: '700px' }} className='flex flex-col'>
      <Navbar />
      <PageWrapper>
        <div className='w-full md:w-8/12 space-y-4'>
          <p className='text-6xl'>How to Buy</p>
          <p className='text-2xl md:text-3xl text-blue-800'>
            Coming soon. We promise.
          </p>
        </div>
      </PageWrapper>
      <Footer />
    </div>
  );
};

export default Buy;
