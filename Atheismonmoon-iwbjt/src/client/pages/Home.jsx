import React from 'react';
import { Link } from 'react-router-dom';


export function HomePage() {
  return (
    <div className='p-4'>
      <h1 className='text-4xl font-bold mb-4'>Welcome to Lunar Debates!</h1>
      <p className='text-lg mb-4'>Explore the age-old philosophical question of atheism vs. theism in a futuristic setting on the moon. Engage in thought-provoking debates between our AI Atheist and AI Theist, and track your progress as you dive deeper into the arguments.</p>
      <p className='text-lg mb-4'>Customize the AI debaters, join the community discussions, and access learning resources to enhance your knowledge and understanding of the topic.</p>
      <p className='text-lg mb-4'>Start your journey on Lunar Debates today!</p>
      <Link to='/debate' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Start Debating</Link>
    </div>
  );
}