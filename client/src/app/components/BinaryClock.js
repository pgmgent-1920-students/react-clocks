import React from 'react';

import LEDStrip from './LEDStrip';

const BinaryClock = () => {
  return (
    <div className="binary-clock">
      <LEDStrip amount={2} />
      <LEDStrip amount={4} />
      <LEDStrip amount={3} />
      <LEDStrip amount={4} />
      <LEDStrip amount={3} />
      <LEDStrip amount={4} />
    </div>
  );
};

export default BinaryClock;