import React from 'react';
import Navbar from '../components/molecules/Navbar';
import PageWrapper from '../components/atoms/PageWrapper';
const Roadmap = () => {
  return (
    <div>
      <Navbar />
      <PageWrapper>
        <p className='text-6xl'>Roadmap</p>

        <div className='space-y-8 mt-8'>
          <div className='w-full md:w-3/5 space-y-4'>
            <p className='text-3xl text-blue-800'>Phase 0</p>
            <div className='text-gray-500'>
              <p className='text-xl'>- Develop Website</p>
              <p className='text-xl'>- Develop initial ERC20 Contract</p>
              <p className='text-xl'>
                - Create social media accounts and telegram channel
              </p>
              <p className='text-xl'>- Finalize roadmap</p>
            </div>
          </div>
          <div className='w-full md:w-3/5 space-y-4'>
            <p className='text-3xl text-blue-800'>Phase 1</p>
            <div className='text-gray-500'>
              <p className='text-xl'>
                - Develop website Community + Development Journal pages
              </p>
              <p className='text-xl'>- Publish ERC20 Contract</p>
              <p className='text-xl'>
                - Grow community to 500 telegram members
              </p>
              <p className='text-xl'>
                - Begin development on merchant marketplace
              </p>
              <p className='text-xl'>
                - Begin development on official Gate wallet
              </p>
            </div>
          </div>
          <div className='w-full md:w-3/5 space-y-4'>
            <p className='text-3xl text-blue-800'>Phase 2</p>
            <div className='text-gray-500'>
              <p className='text-xl'>
                - Publish v1 of merchant marketplace + official Gate wallet
              </p>
              <p className='text-xl'>
                - Reach $1 million market capitalization
              </p>
              <p className='text-xl'>
                - Get listed on CoinMarketCap and CoinGecko
              </p>
              <p className='text-xl'>
                - Grow community to 1000 telegram members
              </p>
              <p className='text-xl'>
                - Begin development on developer documentation and integrations
              </p>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default Roadmap;
