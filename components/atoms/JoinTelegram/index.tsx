import React from 'react';

const JoinTelegram = () => {
  return (
    <a
      href='https://t.me/gatecryptochannel'
      target='_blank'
      className='flex shadow-lg p-2 md:p-4 border border-gray-400 cursor-pointer justify-center text-lg w-10/12 md:w-auto mx-auto'
    >
      Join Telegram
      <img src='/telegram.png' className='w-6 h-6 my-auto ml-2' />
    </a>
  );
};

export default JoinTelegram;
