import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppNo from './AppNo';
import AppIndex from './AppIndex';
import AppDisplay from './AppDisplay';
import App2 from './App2';
import AppToc from './AppToc';
import App from './App';

import about from './about';
import boxModel from './boxModel';
import boxSizing from './boxSizing';
import clear from './csslayout/out/clear';
import clearfix from './csslayout/out/clearfix';
import column from './csslayout/out/column';
import flexbox from './csslayout/out/flexbox';
import floatLayout from './csslayout/out/floatLayout';
import float from './csslayout/out/float';
import frameworks from './csslayout/out/frameworks';
import inlineBlockLayout from './csslayout/out/inlineBlockLayout';
import inlineBlock from './csslayout/out/inlineBlock';
import marginAuto from './marginAuto';
import maxWidth from './maxWidth';
import mediaQueries from './csslayout/out/mediaQueries';
import percent from './csslayout/out/percent';
import positionExample from './csslayout/out/positionExample';
import position from './position';

import {Router,Redirect, BrowserRouter,Route,Switch, Link} from 'react-router-dom'
var { ipcRenderer } =require("electron");//
import createHashHistory from "history/createHashHistory";
const history = createHashHistory({
  hashType: "slash" // the default
})
export default class Root extends Component<Props> {
  constructor(){
    super();
    ipcRenderer.on("goback", ()=>{
        console.log(history);
        history.goBack();
    });
  }
  render() {
    return (
        <Router  history={history}>
          <App>
            <Route exact path="/no-layout.html" component={AppNo} />
            <Route exact path="/index.html" component={AppIndex} />
            <Route exact path="/toc.html" component={AppToc} />
            <Route exact path="/display.html" component={AppDisplay} />
            <Route exact path="/" component={AppIndex} />
<Route exact path="/about.html" component={about} />
<Route exact path="/margin-auto.html" component={marginAuto} />
<Route exact path="/max-width.html" component={maxWidth} />
<Route exact path="/box-model.html" component={boxModel} />
<Route exact path="/box-sizing.html" component={boxSizing} />
<Route exact path="/position.html" component={position} />
<Route exact path="/position-example.html" component={positionExample} />
<Route exact path="/float.html" component={float} />
<Route exact path="/clear.html" component={clear} />
<Route exact path="/clearfix.html" component={clearfix} />
<Route exact path="/column.html" component={column} />
<Route exact path="/flexbox.html" component={flexbox} />
<Route exact path="/float-layout.html" component={floatLayout} />

<Route exact path="/frameworks.html" component={frameworks} />
<Route exact path="/inline-block-layout.html" component={inlineBlockLayout} />
<Route exact path="/inline-block.html" component={inlineBlock} />
<Route exact path="/media-queries.html" component={mediaQueries} />
<Route exact path="/percent.html" component={percent} />
          </App>
        </Router>
    );
  }
}

