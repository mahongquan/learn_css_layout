import React, { Component } from 'react';
import Highlight from 'react-highlight';
import Elem from './Elem';
import Ace from './Ace';
const css=`
width: 600px;
margin: 0 auto;
`;
export default class margin_auto extends Component<Props> {
    constructor(){
      super();
      this.state= {
        css:css,
      }
    }
    cssChange=(newValue)=>{
        this.setState({
            css:newValue
        });
    }
  render() {
    return (
      <React.Fragment>
        
        <div style={{position:"relative"}}>
            <h1 className="content">margin: auto;</h1>
            <Ace css={this.state.css} cssChange={this.cssChange} />
        </div>
        <Elem id="main" css={this.state.css}>
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
