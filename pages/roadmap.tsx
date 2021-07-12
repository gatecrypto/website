import React from 'react';
import Navbar from '../components/molecules/Navbar';
import PageWrapper from '../components/atoms/PageWrapper';
import PhaseCard from '../components/molecules/PhaseCard';
import Footer from '../components/molecules/Footer';

const Roadmap = () => {
  return (
    <div>
      <Navbar />
      <PageWrapper>
        <p className='text-6xl'>Roadmap</p>

        <div className='space-y-8 mt-8'>
          <div className='w-full md:w-3/5 space-y-4'>
            <PhaseCard
              phase={0}
              objectiveList={[
                'Develop Website',
                'Develop initial BEP-20 Contract',
                'Create social media accounts and telegram channel',
                'Finalize roadmap',
              ]}
            />
            <PhaseCard
              phase={1}
              objectiveList={[
                'Develop website Community + Development Journal pages',
                'Publish BEP-20 Contract',
                'Grow community to 500 telegram members',
                'Begin development on merchant marketplace',
                'Begin development on official Gate wallet',
              ]}
            />
            <PhaseCard
              phase={2}
              objectiveList={[
                'Publish v1 of merchant marketplace + official Gate wallet',
                'Reach $1 million market capitalization',
                'Get listed on CoinMarketCap and CoinGecko',
                'Grow community to 1000 telegram members',
                'Begin development on developer documentation and integrations',
              ]}
            />
          </div>
        </div>
      </PageWrapper>
      <Footer />
    </div>
  );
};

export default Roadmap;
