import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import JoinTelegram from '../components/atoms/JoinTelegram';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <div className='relative w-100 h-mobile-screen md:h-screen'>
        <div
          className='absolute transform top-1/2 left-1/2'
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <p className='text-9xl'>Gate</p>
          <img src='/icon.svg' className='w-40 h-40 mx-auto' />
          <div className='flex flex-col space-y-8 text-2xl mt-48'>
            <Link href='/learn'>
              <a className='w-max mx-auto'>
                <button className='focus:outline-none'>Learn</button>
              </a>
            </Link>
            <Link href='/roadmap'>
              <a className='w-max mx-auto'>
                <button className='focus:outline-none'>Roadmap</button>
              </a>
            </Link>
            <JoinTelegram />
          </div>
        </div>
      </div>
    </div>
  );
}
