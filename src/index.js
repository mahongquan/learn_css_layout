import React from 'react';
import ReactDOM from 'react-dom';
// import AppPaint from './AppPaint';
// import App from './Examples';
import App from './AppRoutes';
// import App from './AppTest';
// import App from './AppSplit';
// import App from './AppTabs';
// let module_name='./AppTabs';
let module_name='./AppRoutes';

if(module_name==="./AppTabs"){
    require("react-tabs/style/react-tabs.css") ;
    require("react-virtualized/styles.css") ;
    require("./semantic-ui/semantic.css") ;
    require("storm-react-diagrams/dist/style.min.css");
    require("./demo.css") ;   //storm diagrams 
}
else if(module_name==="./AppRoutes"){
    require('highlight.js/styles/dark.css');

}
ReactDOM.render(<App></App>, document.getElementById('root'));
