import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
#translations {
  max-width: 400px;
  margin: 0 auto 1em;
  display:block;
}
#translations span {
  margin: 0 .2em;
  white-space:normal;
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
<div id="translations">
<span><a href="http://learnlayout.com">english</a></span>
<span><a href="http://es.learnlayout.com">español</a></span>
<span><a href="http://fr.learnlayout.com">français</a></span>
<span><a href="http://de.learnlayout.com">deutsch</a></span>
<span><a href="http://nl.learnlayout.com">dutch</a></span>
<span><a href="http://it.learnlayout.com">italiano</a></span>
<span><a href="http://pt-br.learnlayout.com">português(brasil)</a></span>
<span><a href="http://pt-pt.learnlayout.com">português(português)</a></span>
<span><a href="http://ru.learnlayout.com">русский</a></span>
<span><a href="http://fa.learnlayout.com">فارسی</a></span>
<span><a href="http://ar.learnlayout.com">عربى</a></span>
<span><a href="http://zh.learnlayout.com">中文</a></span>
<span><a href="http://zh-tw.learnlayout.com">正體中文</a></span>
<span><a href="http://ko.learnlayout.com">한국어</a></span>
<span><a href="http://ja.learnlayout.com">日本語</a></span>
</div>
</div>
    );
  }
}
