import React from 'react';
import GoalCard from '../components/molecules/GoalCard';
import PageWrapper from '../components/atoms/PageWrapper';
import Navbar from '../components/molecules/Navbar';
import Footer from '../components/molecules/Footer';

const Learn = () => {
  return (
    <div>
      <Navbar />
      <PageWrapper>
        <div className='w-full md:w-8/12 space-y-4'>
          <p className='text-6xl'>Learn</p>
          <p className='text-2xl md:text-3xl text-blue-800'>
            Gate is different. Designed to be used, Gate works for everyone.
            Built on the Binance Smart Contract chain, transferring Gate costs
            pennies - a fraction of the Ethereum network. Gate is backed by a
            real asset pool that grows as Gate is traded.
          </p>
        </div>

        <div className='w-full md:w-3/5 space-y-4 mt-8 text-bold'>
          <p className='text-4xl border-b border-gray-500 pr-8 pb-2 w-max'>
            Goals
          </p>
          <GoalCard
            num={1}
            goal='Generate Revenue'
            text="Gate is self-sufficient. While other coins generate revenue from
              large fees, Gate thrives from promoting transactions. Fees are
              kept to a minimum so it is viable for every purchase. The revenue
              created by the network will be used to further grow Gate's
              capabilities."
          />
          <GoalCard
            num={2}
            goal='Community Focus'
            text='The Gate community is the beating heart of this revolution. This
            project is meant to create opportunities for everyone involved. From
            the small investor to the multinational business, Gate works for
            you.'
          />
          <GoalCard
            num={3}
            goal='Tech First'
            text="Gate is made by developers focused on creating accessible
            technology. Using the most performant frameworks and development
            workflows, Gate is designed in order to continually improve. Nearly
            all of Gate's technology is open-sourced, including this website."
          />
        </div>
      </PageWrapper>
      <Footer />
    </div>
  );
};

export default Learn;
