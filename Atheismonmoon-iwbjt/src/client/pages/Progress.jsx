import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getProgress from '@wasp/queries/getProgress';
import updateProgress from '@wasp/actions/updateProgress';

export function Progress() {
  const { data: progress, isLoading, error } = useQuery(getProgress);
  const updateProgressFn = useAction(updateProgress);
  const [understandingLevel, setUnderstandingLevel] = useState('');
  const [engagementScore, setEngagementScore] = useState(0);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleUpdateProgress = () => {
    updateProgressFn({ understandingLevel, engagementScore });
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Progress</h1>
      <div className='mb-2'>Understanding Level: {progress?.understandingLevel}</div>
      <div className='mb-2'>Engagement Score: {progress?.engagementScore}</div>
      <div className='mb-2'>
        <label htmlFor='understandingLevel'>Understanding Level:</label>
        <input type='text' id='understandingLevel' value={understandingLevel} onChange={(e) => setUnderstandingLevel(e.target.value)} className='border rounded text-lg' />
      </div>
      <div className='mb-2'>
        <label htmlFor='engagementScore'>Engagement Score:</label>
        <input type='number' id='engagementScore' value={engagementScore} onChange={(e) => setEngagementScore(parseInt(e.target.value))} className='border rounded text-lg' />
      </div>
      <button onClick={handleUpdateProgress} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Update Progress</button>
      <Link to='/debate' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2'>Go to Debate</Link>
    </div>
  );
}