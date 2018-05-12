import React, { Component } from 'react';
import App from './App2';
import AppNo from './csslayout/out/noLayout';
import AppIndex from './csslayout/out/index';
import AppDisplay from './csslayout/out/display';
import AppToc from './csslayout/out/toc';
import about from './csslayout/out/about';
import boxModel from './csslayout/out/boxModel';
import boxSizing from './csslayout/out/boxSizing';
import clear from './csslayout/out/clear';
import clearfix from './csslayout/out/clearfix';
import column from './csslayout/out/column';
import flexbox from './csslayout/out/flexbox';
import floatLayout from './csslayout/out/floatLayout';
import float from './csslayout/out/float';
import frameworks from './csslayout/out/frameworks';
import inlineBlockLayout from './csslayout/out/inlineBlockLayout';
import inlineBlock from './csslayout/out/inlineBlock';
import marginAuto from './csslayout/out/marginAuto';
import maxWidth from './csslayout/out/maxWidth';
import mediaQueries from './csslayout/out/mediaQueries';
import percent from './csslayout/out/percent';
import positionExample from './csslayout/out/positionExample';
import position from './csslayout/out/position';
import {Router,Redirect,Route,Switch} from 'react-router-dom'
import createHashHistory from "history/createHashHistory";
let ipcRenderer;
if(window.myremote)
{
    ipcRenderer  =window.myremote.electron.ipcRenderer;//
}
const history = createHashHistory({
  hashType: "slash" // the default
})
export default class Root extends Component<Props> {
  constructor(){
    super();
    if(ipcRenderer){
      ipcRenderer.on("goback", ()=>{
          console.log(history);
          history.goBack();
      });
    }
  }
  render() {
    return (
        <Router  history={history}>
          <App>
          <Switch>
            <Route exact path="/" component={AppIndex} />
            <Route exact path="/index.html" component={AppIndex} />
            <Route exact path="/no-layout.html" component={AppNo} />
            <Route exact path="/toc.html" component={AppToc} />
            <Route exact path="/display.html" component={AppDisplay} />
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
            <Redirect path="/"  to="/" />
          </ Switch>
          </App>
        </Router>
    );
  }
}

