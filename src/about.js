import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';
export default class about extends Component<Props> {
  render() {
    return (<React.Fragment>
    
<h1 className="content">about this site</h1>
<style jsx="true">{`
  #credits {
    text-align: center;
  }
  #credits img {
    vertical-align: middle;
    margin: 0 20px;
    width: 25%;
    max-width: 300px;
  }
  #credits a:hover {
    background-color: transparent;
  }
  .content {
    text-align: center;
  }
`}</style>
<div id="credits">
  <a ><img alt="Greg Smith" src="./images/author1.jpeg"/></a>
  <a ><img alt="Isaac Durazo" src="./images/author2.jpeg" /></a>
  <a ><img alt="Bocoup" src="./images/bob.png"/></a>
</div>
<div className="content">
  Written and built by <a href="#">Greg Smith</a>. Design by <a href="#">Isaac Durazo</a>. We work at <a href="#">Bocoup</a>.
</div>
<div className="content">
<a href="#">
    Issues / Feedback
  </a>
</div>

    </React.Fragment>);
  }
}
