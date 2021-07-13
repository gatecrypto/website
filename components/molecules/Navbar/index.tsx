import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ClickAwayListener from 'react-click-away-listener';
import JoinTelegram from '../../atoms/JoinTelegram';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='w-full mx-auto md:w-4/5 relative flex py-6 text-blue-800'>
      <Link href='/'>
        <a className='flex w-max md:mx-0 font-bold mx-auto space-x-2'>
          <p className='text-4xl'>Gate</p>
          <img src='/icon.svg' className='h-9 w-9 mt-auto mb-0.5' />
        </a>
      </Link>
      <div
        className='absolute right-0 top-1/2 mr-0'
        style={{ transform: 'translate(0, -50%)' }}
      >
        <div className='hidden md:flex space-x-4 text-lg'>
          <Link href='/learn'>
            <a className='my-auto'>
              <p>Learn</p>
            </a>
          </Link>
          <Link href='/roadmap'>
            <a className='my-auto'>
              <p>Roadmap</p>
            </a>
          </Link>
          <Link href='/buy'>
            <a className='my-auto'>
              <p>Buy</p>
            </a>
          </Link>
          <JoinTelegram />
        </div>
        <button
          onClick={() => setIsVisible(true)}
          className='flex mr-4 md:hidden'
        >
          <img src='/hamburger.png' className='w-6 h-6' />
        </button>
      </div>
      <AnimatePresence>
        {isVisible && (
          <ClickAwayListener onClickAway={() => setIsVisible(false)}>
            <motion.div
              className='fixed shadow-nav md:hidden max-w-sm top-0 h-screen left-0 bg-white flex flex-col text-center text-xl space-y-8 pt-8'
              initial={{ width: '55%', left: '-55%' }}
              animate={{ left: '0' }}
              transition={{ duration: 0.25 }}
              exit={{ left: '-55%' }}
            >
              <a className='flex w-max md:mx-0 font-bold mx-auto space-x-2'>
                <p className='text-4xl'>Gate</p>
                <img src='/icon.svg' className='h-9 w-9 mt-auto mb-0.5' />
              </a>
              <Link href='/learn'>
                <a>Learn</a>
              </Link>
              <Link href='/roadmap'>
                <a>Roadmap</a>
              </Link>
              <Link href='/buy'>
                <a>Buy</a>
              </Link>
              <JoinTelegram />
              <Link href='/'>
                <a
                  className='w-max mx-auto absolute bottom-36 left-1/2'
                  style={{ transform: 'translate(-50%, -50%)' }}
                >
                  <img src='/icon.svg' className='w-12 h-12' />
                </a>
              </Link>
            </motion.div>
          </ClickAwayListener>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
