import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';
import Elem from './Elem';
export default class clear extends Component<Props> {
  render() {
    return (
      <React.Fragment>
        <h1 className="content">clear</h1>
        <p className="content">
          The <code>clear</code> property is important for controlling the
          behavior of floats. Compare these two examples:
        </p>
        <style jsx="true">{`
          .box {
            float: left;
            width: 200px;
            height: 100px;
            margin: 1em;
          }
        `}</style>
        <figure className="highlight">
          <Highlight>{`
  <div className="box">...</div>
<section>...</section>

`}</Highlight>
        </figure>
        <figure className="highlight">
          <Highlight>{`.box {
  float: left;
  width: 200px;
  height: 100px;
  margin: 1em;
}`}</Highlight>
        </figure>
        <div className="content">
          <Elem className="box">
            <p>I feel like I&apos;m floating!</p>
          </Elem>
          <Elem section green>
            <p>
              In this case, the <code>section</code> element is actually after
              the <code>div</code>. However, since the <code>div</code> is
              floated to the left, this is what happens: the text in the{' '}
              <code>section</code> is floated around the <code>div</code> and
              the <code>section</code> surrounds the whole thing. What if we
              wanted the <code>section</code> to actually appear after the
              floated element?
            </p>
          </Elem>
        </div>
        <style jsx="true">{`
          .after-box {
            clear: left;
          }
        `}</style>
        <figure className="highlight">
          <Highlight>{`.box {
  float: left;
  width: 200px;
  height: 100px;
  margin: 1em;
}
.after-box {
  clear: left;
}`}</Highlight>
        </figure>
        <div className="content">
          <Elem className="box">
            <p>I feel like I&apos;m floating!</p>
          </Elem>
          <Elem section green className="after-box">
            <p>
              Using <code>clear</code> we have now moved this section down below
              the floated <code>div</code>. You use the value <code>left</code>{' '}
              to clear elements floated to the left. You can also clear{' '}
              <code>right</code> and <code>both</code>.
            </p>
          </Elem>
        </div>
        <div className="nav-wrapper">
          <Link to="float.html" className="nav prev">
            Previous
          </Link>
          <Link to="clearfix.html" className="nav next">
            Next
          </Link>
        </div>
        <footer>10 / 19</footer>
      </React.Fragment>
    );
  }
}
