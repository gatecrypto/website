import React from 'react';

const PageWrapper = ({ children }: { children: JSX.Element[] }) => {
  return <div className='w-4/5 mx-auto'>{children}</div>;
};

export default PageWrapper;
