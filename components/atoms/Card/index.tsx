import React from 'react';

const Card = ({
  children,
  className,
  width,
}: {
  className?: string;
  children: any;
  width?: string;
}) => {
  return (
    <div
      className={`shadow-xl p-8 bg-white space-y-2 ${width ? width : 'w-max'} ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
