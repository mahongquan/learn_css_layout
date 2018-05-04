import React, { Component } from 'react';
import {Link} from 'react-router-dom';
const styles={
  credits_img: {
    verticalAlign: "middle",
    margin: "0 20px",
    width: "25%",
    maxWidth: "300px"
  },
  credits_a:{
    hover:{
        backgroundColor: "transparent",
    }
  },
  content:{
    textAlign: "center"
  }
}
export default class Root extends Component<Props> {
  render() {
    return (
    <div id="container">
<h1  style={styles.content}>about this site</h1>
<div id="credits" style={{textAlign:"center"}}>
<a href="#"><img style={styles.credits_img} alt="Greg Smith" src="#"/></a>
<a href="#"><img style={styles.credits_img} alt="Isaac Durazo" src="#"/></a>
<a href="#"><img style={styles.credits_img} alt="Bocoup" src="./images/bob.png"/></a>
</div>
<div  style={styles.content}>
  Written and built by <a href="#">Greg Smith</a>. Design by <a href="#">Isaac Durazo</a>. We work at <a href="#">Bocoup</a>.
</div>
<div  style={styles.content}>
<a href="#">
    Issues / Feedback
  </a>
</div>
</div>
    );
  }
}
