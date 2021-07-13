import React from 'react';

const JoinTelegram = () => {
  return (
    <a
      href='https://t.me/gatecryptochannel'
      target='_blank'
      rel='noreferrer'
      className='flex transition duration-500 shadow-lg md:shadow-none hover:shadow-lg p-2 md:p-4 border border-gray-400 cursor-pointer justify-center text-lg w-10/12 md:w-auto mx-auto bg-white'
    >
      Join Telegram
      <img src='/telegram.png' className='w-6 h-6 my-auto ml-2' />
    </a>
  );
};

export default JoinTelegram;
