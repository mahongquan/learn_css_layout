import React from 'react';
import ReactDOM from 'react-dom';
// import App from './AppRoutes';
import App from './paint';
//import './css/style.css';
import 'highlight.js/styles/dark.css';

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
ReactDOM.render(<App {...props}  />, document.getElementById('root'));
