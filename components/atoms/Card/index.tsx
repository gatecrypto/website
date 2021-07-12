import React from 'react';

const Card = ({ children }: { children: any }) => {
  return <div className='shadow-xl p-8 bg-white space-y-2'>{children}</div>;
};

export default Card;
