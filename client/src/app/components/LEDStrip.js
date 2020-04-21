import React from 'react';

import LED from './LED';

const LEDStrip = ({amount = 1, v = 1}) => {
  const toBits = (input, n) => {
    input = String(input);
    while (input.length < n) {
      input = `0${input}`;
    }
    return input;
  };

  const binaryValue = Number(v).toString(2);
  console.log(toBits(binaryValue, amount));

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

/*
1 --> xxxx --> 0001
2 --> xxxx --> 0010
3 --> xxxx --> 0011
4 --> xxxx --> 0100
5 --> xxxx --> 0101
6 --> xxxx --> 0110
7 --> xxxx --> 0111
8 --> xxxx --> 1000
9 --> xxxx --> 1001
*/