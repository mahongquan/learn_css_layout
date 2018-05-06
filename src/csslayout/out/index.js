import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TranLinks from './TranLinks';
export default class index extends Component<Props> {
  render() {
    return (
    <div id="container">
<style jsx="true">{`
#about {
    max-width: 550px;
    margin: 0 auto 2em;
    padding: 0 1rem;
  }
`}</style>
<div id="about">
<p>
    This site teaches the CSS fundamentals that are used in any website's layout.
  </p>
<p>
    I assume you already know what selectors, properties, and values are. And you probably know a thing or two about layout, though it may still be a rage-provoking activity for you. If you want to learn HTML and CSS from the beginning, you should check out <a href="http://learn.shayhowe.com/html-css/">this tutorial</a>. Otherwise, let's see if we can save you some fury on your next project.
  </p>
</div>
<div className="nav-wrapper">
<Link className="nav start" to="./no-layout.html">Get Started</Link>
</div>
<TranLinks />
</div>
    );
  }
}
