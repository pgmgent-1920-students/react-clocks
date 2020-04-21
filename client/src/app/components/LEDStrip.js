import React from 'react';

import LED from './LED';

const LEDStrip = ({amount = 1}) => {
  const leds = [];
  for (let i = 0; i < amount ; i++) {
    leds.push(<LED />);
  }

  return (
    <div className="led-strip">
      {leds}
    </div>
  );
};

export default LEDStrip;