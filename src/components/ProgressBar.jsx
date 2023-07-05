import React, { useEffect } from 'react';

const ProgressBar = ({ progress }) => {
  useEffect(() => {
    console.log(progress)
  }, [progress]);
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
