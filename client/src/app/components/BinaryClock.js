import React from 'react';
import LEDStrip from './LEDStrip';

const BinaryClock = () => {
  return (
    <div className="binary-clock">
      <LEDStrip />
      <LEDStrip />
      <LEDStrip />
      <LEDStrip />
      <LEDStrip />
      <LEDStrip />
    </div>
  );
};

export default BinaryClock;