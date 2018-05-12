import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';
import Elem from './Elem';
export default class clearfix extends Component<Props> {
  render() {
    return (<React.Fragment>
    
<h1 className="content">the clearfix hack</h1>
<p className="content">
  Here is a weird, bad thing that can sometimes happen when using floats:
</p>
<style jsx="true">{`
  .content img {
    float: right;
  }
  .clear {
    clear: both;
  }
`}</style>
<figure className="highlight"><Highlight>{`img {
  float: right;
}`}</Highlight></figure>
<div className="content">
  <Elem>
    <img alt="An Image" src="./images/ilta.png"/>
    <p>
        Uh oh... this image is taller than the element containing it, and it&apos;s floated, so it&apos;s overflowing outside of its container!
    </p>
  </Elem>
  </div>
  <p className="content clear">
    Boo. There is a way to fix this, but it's ugly. It's called the <em>clearfix hack</em>.
  </p>
  <p className="content">
    Let's try adding this new CSS:
  </p>
  <figure className="highlight"><Highlight>{`.clearfix {
    overflow: auto;
    }`}
  </Highlight></figure>
  <p className="content">
    Now let's see what happens:
  </p>
  <div className="content">
    <Elem style={{overflow:"hidden"}}>
      <img alt="An Image" src="./images/ilta.png"/>
      <p>Much better!</p>
    </Elem>
  </div>
<p className="content">
  This works for modern browsers. If you want to support IE6 you will want to add the following:
</p>
<figure className="highlight"><Highlight>{`.clearfix {
  overflow: auto;
  zoom: 1;
}`}</Highlight></figure>
<p className="content">
  There are exotic browsers that may require extra attention. <a href="#">The world of clearfixing is pretty scary</a>, but this simple solution will work for the vast majority of browsers today.
</p>
<div className="nav-wrapper">
<Link to="clear.html" className="nav prev">Previous</Link>
<Link to="float-layout.html" className="nav next">Next</Link>
</div>
<footer>
          11 / 19
        </footer>

    </React.Fragment>);
  }
}
