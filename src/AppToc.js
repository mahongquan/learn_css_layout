import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
const styles={
ul: {
  padding: 0,
  width: "90%",
  margin: "auto",
},

li: {
  listStyleType:"none", 
  marginBottom: ".5em",
},

Link: {
  display: "block",
  textAlign: "center",
  padding: ".5em",
  color: "#fff",
  backgroundColor: "#D64078",
  border: "solid #B03060 1px",
  borderBottom: "solid #B03060 4px",
  textShadow: "0px 2px 0 #B03060",
  borderRadius: ".3em",
  position: "relative",
  WebkitTransition: "all 0.1s ease-out",  /* Safari 3.2+, Chrome */
     MozTransition: "all 0.1s ease-out",  /* Firefox 4-15 */
       OTransition: "all 0.1s ease-out",  /* Opera 10.5â12.00 */
          transition: "all 0.1s ease-out",   //Firefox 16+, Opera 12.50+ 
hover: {
  textDecoration: "none",
  backgroundColor: "#c63b6f",
},

active: {
  borderBottom: "solid #b03060 1px",
  top: "4px",
  WebkitTransition: "all 0 ease-out",  /* Safari 3.2+, Chrome */
     MozTransition: "all 0 ease-out",  /* Firefox 4-15 */
       OTransition: "all 0 ease-out",  /* Opera 10.5â12.00 */
          transition: "all 0 ease-out",  /* Firefox 16+, Opera 12.50+ */
},
},
}
// @media screen and (min-width:601px) {
//   #toc {
//     -moz-column-count: 2;
//     -moz-column-gap: 1em;
//     -webkit-column-count: 2;
//     -webkit-column-gap: 1em;
//     column-count: 2;
//     column-gap: 1em;
//     line-height: 1.2em;
//   }
// }
export default class Root extends Component<Props> {
  render() {
    return (
<div id="container">
<div className="content">
<h1 className="content">Table of Contents</h1>
<ul id="toc" style={{lineHeight:"1.5em",paddingLeft:0}}>
<li style={styles.li}>
<ul style={styles.ul}>
<li style={styles.li}><Link style={styles.Link} to="no-layout.html">no layout</Link></li>
<li style={styles.li}><Link style={styles.Link} to="display.html">the "display" property</Link></li>
<li style={styles.li}><Link style={styles.Link} to="margin-auto.html">margin: auto;</Link></li>
<li style={styles.li}><Link style={styles.Link} to="max-width.html">max-width</Link></li>
<li style={styles.li}><Link style={styles.Link} to="box-model.html">the box model</Link></li>
<li style={styles.li}><Link style={styles.Link} to="box-sizing.html">box-sizing</Link></li>
<li style={styles.li}><Link style={styles.Link} to="position.html">position</Link></li>
<li style={styles.li}><Link style={styles.Link} to="position-example.html">position example</Link></li>
<li style={styles.li}><Link style={styles.Link} to="float.html">float</Link></li>
<li style={styles.li}><Link style={styles.Link} to="clear.html">clear</Link></li>
<li style={styles.li}><Link style={styles.Link} to="clearfix.html">the clearfix hack</Link></li>
<li style={styles.li}><Link style={styles.Link} to="float-layout.html">float layout example</Link></li>
<li style={styles.li}><Link style={styles.Link} to="percent.html">percent width</Link></li>
<li style={styles.li}><Link style={styles.Link} to="media-queries.html">media queries</Link></li>
<li style={styles.li}><Link style={styles.Link} to="inline-block.html">inline-block</Link></li>
<li style={styles.li}><Link style={styles.Link} to="inline-block-layout.html">inline-block layout</Link></li>
<li style={styles.li}><Link style={styles.Link} to="column.html">column</Link></li>
<li style={styles.li}><Link style={styles.Link} to="flexbox.html">flexbox</Link></li>
<li style={styles.li}><Link style={styles.Link} to="frameworks.html">css frameworks</Link></li>
<li style={styles.li}><Link style={styles.Link} to="about.html">about this site</Link></li>
</ul>
</li>
</ul>
</div>
</div>

    );
  }
}

