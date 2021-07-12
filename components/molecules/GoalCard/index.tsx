import React from 'react';
import Card from '../../atoms/Card';

const GoalCard = ({
  num,
  goal,
  text,
}: {
  num: number;
  goal: string;
  text: string;
}) => {
  return (
    <Card>
      <p className='font-bold text-2xl md:text-3xl text-blue-800'>
        {num}. {goal}
      </p>
      <p className='md:text-xl text-gray-500'>{text}</p>
    </Card>
  );
};

export default GoalCard;
