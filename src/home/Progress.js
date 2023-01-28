import React from 'react';

const Progress = () => {
  return (
    <div class='circular'>
      <div class='inner'></div>
      <div class='outer'></div>
      <div class='numb'>70%</div>
      <div class='circle'>
        <div class='dot'>
          <span></span>
        </div>
        <div class='bar left'>
          <div class='progress'></div>
        </div>
        <div class='bar right'>
          <div class='progress'></div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
