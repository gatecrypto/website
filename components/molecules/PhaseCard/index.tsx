import React from 'react';
import Card from '../../atoms/Card';

const PhaseCard = ({
  phase,
  objectiveList,
}: {
  phase: number;
  objectiveList: string[];
}) => {
  return (
    <Card width='w-full'>
      <p className='font-bold text-2xl md:text-3xl text-blue-800'>
        Phase {phase}
      </p>
      {objectiveList.map((objective: string) => (
        <p className='md:text-xl text-gray-500'>- {objective}</p>
      ))}
    </Card>
  );
};

export default PhaseCard;
