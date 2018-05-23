import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
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
=======
//import App from './AppRoutes';
import App from './AppTest';
//import './css/style.css';
import 'highlight.js/styles/dark.css';
import "react-tabs/style/react-tabs.css" ;
import "react-virtualized/styles.css" ;
// import "./GridExample.css" ;
import "./semantic-ui/semantic.css" ;
import "storm-react-diagrams/dist/style.min.css" ;
import "./demo.css" ;    
// import "./grid.css" ; 
// import "./react-resizable.css" ;
// import "./header.css" ;
//import ContextMenuExample from './ContextMenuExample';
ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> refs/remotes/origin/master
