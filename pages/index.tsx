import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import JoinTelegram from '../components/atoms/JoinTelegram';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='relative py-12 md:py-28 h-mobile-screen md:h-screen w-5/6 md:w-4/5 mx-auto space-y-8'>
      <div className='space-y-4'>
        <p className='text-4xl md:text-5xl font-bold'>
          <span className='text-6xl md:text-8xl text-blue-800'>Gate</span> is
          unlike any other cryptocurrency you have seen.
        </p>
        <p className='text-2xl md:text-4xl'>
          Close to zero transaction fees, backed by real assets.
        </p>
      </div>
      <div className='flex flex-col md:flex-row md:space-x-8 text-2xl text-blue-800 border-t border-gray-400 w-max pt-2'>
        <Link href='/learn'>
          <a>Learn More</a>
        </Link>
        <Link href='/roadmap'>
          <a>Roadmap</a>
        </Link>
        <Link href='/buy'>
          <a>How to Buy</a>
        </Link>
        <Link href='/forum'>
          <a>Forum</a>
        </Link>
        <Link href='/developers'>
          <a>Developers</a>
        </Link>
      </div>
      <img
        src='/icon.svg'
        className='absolute w-16 h-16 left-1/2 bottom-0'
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </div>
  );
}
