import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';
import Elem from './Elem';
export default class inline_block extends Component<Props> {
  render() {
    var box1=(<Elem className="box">
                <p>
                    I&apos;m floating!
                </p>
            </Elem>);
    var box2=(<Elem className="box2">
                <p>
                    I am  inline box!
                </p>
            </Elem>);
    var boxes=[];
    var boxes2=[];
    for(var i=0;i<9;i++){
        boxes.push(box1);
        boxes2.push(box2);
    }
    return (<React.Fragment>
    
        <h1 className="content">inline-block</h1>
        <p className="content">
            You can create a grid of boxes that fills the browser width and wraps nicely. This has been possible for a long time using <code>float</code>, but now with <code>inline-block</code> it&apos;s even easier. <code>inline-block</code> elements are like <code>inline</code> elements but they can have a width and height. Let&apos;s look at examples of both approaches.
        </p>
        <div className="content">
            <h2>The Hard Way (using float)</h2>
        </div>
        <style jsx="true">{`
        .box {
            float: left;
            width: 200px;
            height: 100px;
            margin: 1em;
        }

        .after-box {
            clear: left;
        }
        `}</style>
        <figure className="highlight"><Highlight>{`.box {
  float: left;
  width: 200px;
  height: 100px;
  margin: 1em;
}
.after-box {
  clear: left;
}`}</Highlight></figure>
        <div className="content">
           {boxes}
            <Elem section green className="after-box">
                <p>
                    I&apos;m using clear so I don&apos;t float next to the above boxes.
                </p>
            </Elem>
    </div>
    <div className="content">
        <h2>The Easy Way (using inline-block)</h2>
        <p>
            You can achieve the same effect using the <code>inline-block</code> value of the <code>display</code> property.
        </p>
    </div>
    <style jsx="true">{`
    .box2 {
        display: inline-block;
        width: 200px;
        height: 100px;
        margin: 1em;
    }
    `}</style>
    <figure className="highlight"><Highlight>{`.box2 {
  display: inline-block;
  width: 200px;
  height: 100px;
  margin: 1em;
}`}</Highlight></figure>
    <div className="content">
        {boxes2}
        <Elem green section>
            <p>
                I don&apos;t have to use <code>clear</code> in this case. Nice!
            </p>
        </Elem>
    </div>
    <p className="content">
        You have to do extra work for <a href="#">IE6 and IE7 support</a> of <code>inline-block</code>. Sometimes people talk about <code>inline-block</code> triggering something called <code>hasLayout</code>, though you only need to know about that to support old browsers. Follow the previous link about IE6 and IE7 support if you&apos;re curious to learn more. Otherwise, let&apos;s continue.
    </p>
    <div className="nav-wrapper">
        <Link to="media-queries.html" className="nav prev">Previous</Link>
        <Link to="inline-block-layout.html" className="nav next">Next</Link>
    </div>
    <footer>
        15 / 19
    </footer>
    
    </React.Fragment>);
  }
}
