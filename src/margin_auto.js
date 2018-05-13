import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';
import Elem,{NavWrapper,LinkNav,LinkPrev,LinkNext,LinkToc} from './Elem';
export default class margin_auto extends Component<Props> {
  render() {
    return (
      <React.Fragment>
        <h1 className="content">margin: auto;</h1>
        <style jsx="true">{`
          #main {
            width: 600px;
            margin: 0 auto;
          }
        `}</style>
        <figure className="highlight">
          <Highlight>{`#main {
  width: 600px;
  margin: 0 auto; 
}`}</Highlight>
        </figure>
        <Elem id="main">
          <p>
            Setting the <code>width</code> of a block-level element will prevent
            it from stretching out to the edges of its container to the left and
            right. Then, you can set the left and right margins to{' '}
            <code>auto</code> to horizontally center that element within its
            container. The element will take up the width you specify, then the
            remaining space will be split evenly between the two margins.
          </p>
          <p>
            The only problem occurs when the browser window is narrower than the
            width of your element. The browser resolves this by creating a
            horizontal scrollbar on the page. Let&apos;s improve the
            situation...
          </p>
        </Elem>

      </React.Fragment>
    );
  }
}
