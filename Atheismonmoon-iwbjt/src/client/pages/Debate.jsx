import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import createDebate from '@wasp/actions/createDebate';
import getDebates from '@wasp/queries/getDebates';

export function Debate() {
  const { data: debates, isLoading, error } = useQuery(getDebates);
  const createDebateFn = useAction(createDebate);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCreateDebate = () => {
    createDebateFn({ aiDebaterType: 'theist' });
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Debate Page</h1>
      <button
        onClick={handleCreateDebate}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Start Debate
      </button>
      <div className='mt-4'>
        {debates.map((debate) => (
          <div key={debate.id} className='mt-4 p-2 border rounded'>
            <p>Debate ID: {debate.id}</p>
            <p>Debate Transcript: {debate.debateTranscript}</p>
            <p>AI Debater Type: {debate.aiDebaterType}</p>
          </div>
        ))}
      </div>
      <Link to='/'>Go to Home Page</Link>
    </div>
  );
}