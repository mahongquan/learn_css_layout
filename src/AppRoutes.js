import React, { Component } from 'react';
import App from './App';
// import App from './AppLayout';
// import App from './AppSplit';

import about from './about';
import box_model from './box_model';
import box_sizing from './box_sizing';
import clear from './clear';
import clearfix from './clearfix';
import column from './column';
import display from './display';
import flexbox from './flexbox';
import float_layout from './float_layout';
import float from './float';
import frameworks from './frameworks';
import index from './home';
import inline_block_layout from './inline_block_layout';
import inline_block from './inline_block';
import margin_auto from './margin_auto';
import max_width from './max_width';
import media_queries from './media_queries';
import no_layout from './no_layout';
import percent from './percent';
import position_example from './position_example';
import position from './position';
import toc from './toc';
import styled from '@emotion/styled'
import { HashRouter ,BrowserRouter, Route, Routes, Link } from 'react-router-dom';
let createHistory= require("history").createMemoryHistory;
const history = createHistory();
export default class Root extends Component{
  constructor() {
    super();
  }
  render() {
    const theme = { red: '#D64078', green: '#96C02E', orange: '#FDC72F' };
    return (
      <HashRouter history={history}>
          
            <Routes>
            <App>
              <Route path="/about.html" element={<about />} />
              <Route path="/box-model.html" element={<box_model />} />
              <Route path="/box-sizing.html" element={<box_sizing />} />
              <Route path="/clear.html" element={<clear />} />
              <Route path="/clearfix.html" element={<clearfix />} />
              <Route path="/column.html" element={<column />} />
              <Route path="/display.html" element={<display />} />
              <Route path="/flexbox.html" element={<flexbox />} />
              <Route path="/float-layout.html" element={<float_layout />} />
              <Route path="/float.html" element={<float />} />
              <Route path="/frameworks.html" element={<frameworks />} />
              <Route path="/index.html" element={<index />} />
              <Route path="/inline-block-layout.html" element={<inline_block_layout />} />
              <Route path="/inline-block.html" element={<inline_block />} />
              <Route path="/margin-auto.html" element={<margin_auto />} />
              <Route path="/max-width.html" element={<max_width />} />
              <Route path="/media-queries.html" element={<media_queries />}/>
              <Route path="/no-layout.html" element={<no_layout />} />
              <Route path="/percent.html" element={<percent />} />
              <Route path="/position-example.html" element={<position_example />}/>
              <Route path="/position.html" element={<position />} />
              <Route path="/toc.html" element={<toc />} />
              <Route path="/" element={<index />} />
              </App>
            </Routes>
          
      </HashRouter>
    );
  }
}
