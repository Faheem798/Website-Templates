import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getPreferences from '@wasp/queries/getPreferences';
import customizeAI from '@wasp/actions/customizeAI';

export function Preferences() {
  const { data: preferences, isLoading, error } = useQuery(getPreferences);
  const customizeAIFn = useAction(customizeAI);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCustomizeAI = () => {
    const appearance = document.getElementById('appearance').value;
    const personality = document.getElementById('personality').value;
    const background = document.getElementById('background').value;
    customizeAIFn({ appearance, personality, background });
  };

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-semibold mb-4'>Customize AI</h2>
      <div className='flex flex-col gap-y-4'>
        <div>
          <label htmlFor='appearance' className='font-semibold'>Appearance</label>
          <input type='text' id='appearance' className='border rounded p-2' defaultValue={preferences?.aiAppearance} />
        </div>
        <div>
          <label htmlFor='personality' className='font-semibold'>Personality</label>
          <input type='text' id='personality' className='border rounded p-2' defaultValue={preferences?.aiPersonality} />
        </div>
        <div>
          <label htmlFor='background' className='font-semibold'>Background</label>
          <input type='text' id='background' className='border rounded p-2' defaultValue={preferences?.aiBackground} />
        </div>
        <button
          onClick={handleCustomizeAI}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Save
        </button>
        <Link to='/dashboard' className='text-blue-500'>Back to Dashboard</Link>
      </div>
    </div>
  );
}