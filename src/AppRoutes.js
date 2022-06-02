import React, { Component } from 'react';
import App from './App';
// import App from './AppLayout';
// import App from './AppSplit';

import About from './about';
import Box_model from './box_model';
import Box_sizing from './box_sizing';
import Clear from './clear';
import Clearfix from './clearfix';
import Column from './column';
import Display from './display';
import Flexbox from './flexbox';
import Float_layout from './float_layout';
import Float from './float';
import Frameworks from './frameworks';
import Home from './home';
import Inline_block_layout from './inline_block_layout';
import Inline_block from './inline_block';
import Margin_auto from './margin_auto';
import Max_width from './max_width';
import Media_queries from './media_queries';
import No_layout from './no_layout';
import Percent from './percent';
import Position_example from './position_example';
import Position from './position';
import Toc from './toc';
import styled from '@emotion/styled'
import { HashRouter ,BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default class Root extends Component{
  constructor() {
    super();
  }
  render() {
    const theme = { red: '#D64078', green: '#96C02E', orange: '#FDC72F' };
    return (
      <HashRouter >
        <App>
              <Routes>
              <Route path="/about.html" element={<About />} />
              <Route path="/box-model.html" element={<Box_model />} />
              <Route path="/box-sizing.html" element={<Box_sizing />} />
              <Route path="/clear.html" element={<Clear />} />
              <Route path="/clearfix.html" element={<Clearfix />} />
              <Route path="/column.html" element={<Column />} />
              <Route path="/display.html" element={<Display />} />
              <Route path="/flexbox.html" element={<Flexbox />} />
              <Route path="/float-layout.html" element={<Float_layout />} />
              <Route path="/float.html" element={<Float />} />
              <Route path="/frameworks.html" element={<Frameworks />} />
              <Route path="/index.html" element={<Home />} />
              <Route path="/inline-block-layout.html" element={<Inline_block_layout />} />
              <Route path="/inline-block.html" element={<Inline_block />} />
              <Route path="/margin-auto.html" element={<Margin_auto />} />
              <Route path="/max-width.html" element={<Max_width />} />
              <Route path="/media-queries.html" element={<Media_queries />}/>
              <Route path="/no-layout.html" element={<No_layout />} />
              <Route path="/percent.html" element={<Percent />} />
              <Route path="/position-example.html" element={<Position_example />}/>
              <Route path="/position.html" element={<Position />} />
              <Route path="/toc.html" element={<Toc />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </App>
      </HashRouter>
    );
  }
}
