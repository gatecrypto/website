import React from 'react';
import PageWrapper from '../../components/atoms/PageWrapper';
import Footer from '../../components/molecules/Footer';
import Navbar from '../../components/molecules/Navbar';

const Contracts = () => {
  return (
    <div style={{ minHeight: '700px' }} className='flex flex-col'>
      <Navbar />
      <PageWrapper>
        <div className='w-full md:w-8/12 space-y-4'>
          <p className='text-4xl md:text-6xl'>Contracts</p>
          <div className='space-y-2'>
            <p className='text-xl md:text-3xl text-blue-800'>v2021.07.00</p>
            <p className='text md:text-xl text-blue-800'>Coming soon</p>
          </div>
        </div>
      </PageWrapper>
      <Footer />
    </div>
  );
};

export default Contracts;
