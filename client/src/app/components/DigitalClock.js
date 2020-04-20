import React, { useState } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date().toISOString());

  const tick = () => {
    setTime(new Date().toISOString());    
  };

  setInterval(() => tick(), 5);

  return (
    <div className="digital-clock">
      {time}
    </div>
  )
};

export default DigitalClock;