'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Heading from './Heading';
import Button from './Button';

type EmptyStateProps = {
  title?: string;
  subTitle?: string;
  showReset?: boolean;
};

const EmptyState = ({
  title = 'No exact matches',
  subTitle = 'Try changing or removing some of the filters',
  showReset,
}: EmptyStateProps) => {
  const router = useRouter();

  return (
    <div className='h-[60vh] flex flex-col gap-2 justify-center items-center'>
      <Heading title={title} subTitle={subTitle} center />
      <div className='w-48 mt-4'>
        {showReset && (
          <Button
            outline
            label='Remove all filters'
            onClick={() => router.push('/')}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
