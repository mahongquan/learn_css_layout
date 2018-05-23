import React from 'react';
import ReactDOM from 'react-dom';
// import AppPaint from './AppPaint';

import App from './AppRoutes';
// import App from './AppTest';
import 'highlight.js/styles/dark.css';
import "react-tabs/style/react-tabs.css" ;
import "react-virtualized/styles.css" ;
import "./semantic-ui/semantic.css" ;
import "storm-react-diagrams/dist/style.min.css" ;
import "./demo.css" ;    
ReactDOM.render(<App />, document.getElementById('root'));
