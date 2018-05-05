import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
class Root extends Component<Props> {
    render() {
        // console.log(this.props);
        return (
   <div>
   <style jsx="true">{`
#about {
    max-width: 550px;
    margin: 0 auto 2em;
    padding: 0 1rem;
  }
`}</style>
       <div id="logo">
          <a href="/">
            <img src="./images/logo.png" alt="logo"/>
            <span>Learn CSS Layout</span>
          </a>
        </div>
        <div id="menu">
          <Link className="home-link" to="/">Home</Link>
          <Link to="/toc.html">Table of Contents</Link>
        </div>

        <div>
          {this.props.children}
        </div>
    </div>
        );
    }
}
export default withRouter(Root);
