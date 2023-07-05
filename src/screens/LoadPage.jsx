import React from 'react';
import ProgressBar from '../components/ProgressBar';

const LoadPage = () => {
  const progress = 50;
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      {/* logo */}
      <img src="/images/Logo.png" />
      {/* progress bar */}
      <ProgressBar progress={progress} />
    </div>
  );
};

export default LoadPage;
