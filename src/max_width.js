import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';
import Elem from './Elem';
export default class max_width extends Component<Props> {
  render() {
    return (<React.Fragment>
    
<h1 className="content">max-width</h1>
<style jsx="true">{`
  #main {
    max-width: 600px;
    margin: 0 auto;
  }
`}</style>
<figure className="highlight"><Highlight>{`#main {
  max-width: 600px;
  margin: 0 auto; 
}`}</Highlight></figure>
<Elem id="main">
<p>
    Using <code>max-width</code> instead of <code>width</code> in this situation will improve the browser&apos;s handling of small windows. This is important when making a site usable on mobile. Resize this page to check it out!
  </p>
<p>
    By the way, <code>max-width</code> is <a href="#">supported by all major browsers</a> including IE7+ so you shouldn&apos;t be afraid of using it.
  </p>
</Elem>
<div className="nav-wrapper">
<Link to="margin-auto.html" className="nav prev">Previous</Link>
<Link to="box-model.html" className="nav next">Next</Link>
</div>
<footer>
          4 / 19
        </footer>

    </React.Fragment>);
  }
}
