import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';
import Elem from './Elem';
export default class float_layout extends Component<Props> {
  render() {
    return (
      <React.Fragment>
        <h1 className="content">float layout example</h1>
        <p className="content">
          It&apos;s very common to do entire layouts using <code>float</code>.
          Here is the same layout we did with <code>position</code> earlier, but
          using <code>float</code> instead.
        </p>
        <style jsx="true">{`
          .clearfix:after {
            content: '.';
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
          }
          nav {
            float: left;
            width: 200px;
          }
          section {
            margin-left: 200px;
          }
        `}</style>
        <figure className="highlight">
          <Highlight>{`nav {
  float: left;
  width: 200px;
}
section {
  margin-left: 200px;
}`}</Highlight>
        </figure>
        <Elem className="clearfix">
          <Elem nav red>
            <ul>
              <li>
                <a href="float-layout.html">Home</a>
              </li>
              <li>
                <a href="float-layout.html">Taco Menu</a>
              </li>
              <li>
                <a href="float-layout.html">Draft List</a>
              </li>
              <li>
                <a href="float-layout.html">Hours</a>
              </li>
              <li>
                <a href="float-layout.html">Directions</a>
              </li>
              <li>
                <a href="float-layout.html">Contact</a>
              </li>
            </ul>
          </Elem>
          <Elem section green>
            <p>
              This example works just like the last one. Notice we put a{' '}
              <code>clearfix</code> on the container. It&apos;s not needed in
              this example, but it would be if the <code>nav</code> was longer
              than the non-floated content.
            </p>
          </Elem>
          <Elem section green className="ipsum">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
              vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
              ultrices nec congue eget, auctor vitae massa. Fusce luctus
              vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
              ornare eu, lobortis in odio. Praesent convallis urna a lacus
              interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed
              ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis
              imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida
              venenatis. Integer fringilla congue eros non fermentum. Sed
              dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
              diam velit.
            </p>
          </Elem>
        </Elem>
        <div className="nav-wrapper">
          <Link to="clearfix.html" className="nav prev">
            Previous
          </Link>
          <Link to="percent.html" className="nav next">
            Next
          </Link>
        </div>
        <footer>12 / 19</footer>
      </React.Fragment>
    );
  }
}
