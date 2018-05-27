import React from 'react';
import ReactDOM from 'react-dom';
import App from './paint';
const props = {
  style: {
    background: 'tomato',
    /* Arbitrary css styles */
  },
  brushCol: '#ffffff',
  lineWidth: 10,
  className: 'react-paint',
  height: 500,
  width: 500,
  onDraw: () => { console.log('i have drawn!'); },
};
export default ()=><App {...props}  />;
