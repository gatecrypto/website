import React from 'react';
import PageWrapper from '../components/atoms/PageWrapper';
import Footer from '../components/molecules/Footer';
import Navbar from '../components/molecules/Navbar';
import SignIn from '../components/molecules/SignIn';

const Forum = () => {
  return (
    <div style={{ minHeight: '700px' }} className='flex flex-col'>
      <Navbar />
      <PageWrapper>
        <p className='text-6xl'>Forum</p>
        <SignIn />
      </PageWrapper>
      <Footer />
    </div>
  );
};

export default Forum;
