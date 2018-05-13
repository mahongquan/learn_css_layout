import React, { Component } from 'react';
import {LinkToc} from './Elem';

export default class toc extends Component<Props> {
  render() {
    return (
      <React.Fragment>
        <style jsx="true">{`
          #toc {
            line-height: 1.5em;
            padding-left: 0;
          }

          #toc ul {
            padding: 0;
            width: 90%;
            margin: auto;
          }

          #toc li {
            list-style-type: none;
            margin-bottom: 0.5em;
          }


          @media screen and (min-width: 601px) {
            #toc {
              -moz-column-count: 2;
              -moz-column-gap: 1em;
              -webkit-column-count: 2;
              -webkit-column-gap: 1em;
              column-count: 2;
              column-gap: 1em;
              line-height: 1.2em;
            }
          }
        `}</style>
        <div className="content">
          <h1 className="content">Table of Contents</h1>
          <ul id="toc">
            <li>
              <ul>
                <li>
                  <LinkToc to="no-layout.html">no layout</LinkToc>
                </li>
                <li>
                  <LinkToc to="display.html">
                    the &quot;display&quot; property
                  </LinkToc>
                </li>
                <li>
                  <LinkToc to="margin-auto.html">margin: auto;</LinkToc>
                </li>
                <li>
                  <LinkToc to="max-width.html">max-width</LinkToc>
                </li>
                <li>
                  <LinkToc to="box-model.html">the box model</LinkToc>
                </li>
                <li>
                  <LinkToc to="box-sizing.html">box-sizing</LinkToc>
                </li>
                <li>
                  <LinkToc to="position.html">position</LinkToc>
                </li>
                <li>
                  <LinkToc to="position-example.html">position example</LinkToc>
                </li>
                <li>
                  <LinkToc to="float.html">float</LinkToc>
                </li>
                <li>
                  <LinkToc to="clear.html">clear</LinkToc>
                </li>
                <li>
                  <LinkToc to="clearfix.html">the clearfix hack</LinkToc>
                </li>
                <li>
                  <LinkToc to="float-layout.html">float layout example</LinkToc>
                </li>
                <li>
                  <LinkToc to="percent.html">percent width</LinkToc>
                </li>
                <li>
                  <LinkToc to="media-queries.html">media queries</LinkToc>
                </li>
                <li>
                  <LinkToc to="inline-block.html">inline-block</LinkToc>
                </li>
                <li>
                  <LinkToc to="inline-block-layout.html">inline-block layout</LinkToc>
                </li>
                <li>
                  <LinkToc to="column.html">column</LinkToc>
                </li>
                <li>
                  <LinkToc to="flexbox.html">flexbox</LinkToc>
                </li>
                <li>
                  <LinkToc to="frameworks.html">css frameworks</LinkToc>
                </li>
                <li>
                  <LinkToc to="about.html">about this site</LinkToc>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
