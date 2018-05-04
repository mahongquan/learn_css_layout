import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
export default class Root extends Component<Props> {
  render() {
    return (
        <div>
            <Link to="/no">nolayout</Link>
            <Link style={{paddingLeft:"10px"}} to="/parts">parts</Link>
        </div>
    );
  }
}

