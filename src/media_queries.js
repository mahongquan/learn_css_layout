import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';
import Elem from './Elem';
export default class media_queries extends Component<Props> {
  render() {
    return (
      <React.Fragment>
        <h1 className="content">media queries</h1>
        <p className="content">
          &quot;Responsive Design&quot; is the strategy of making a site that
          &quot;responds&quot; to the browser and device that it is being shown
          on... by looking awesome no matter what.
        </p>
        <p className="content">
          Media queries are the most powerful tool for doing this. Let&apos;s
          take our layout that uses percent widths and have it display in one
          column when the browser is too small to fit the menu in the sidebar:
        </p>
        <style jsx="true">{`
          @media screen and (min-width: 600px) {
            nav {
              float: left;
              width: 25%;
            }
            section {
              margin-left: 25%;
            }
          }
          @media screen and (max-width: 599px) {
            nav li {
              display: inline;
            }
          }
        `}</style>
        <figure className="highlight">
          <Highlight>{`@media screen and (min-width:600px) {
  nav {
    float: left;
    width: 25%;
  }
  section {
    margin-left: 25%;
  }
}
@media screen and (max-width:599px) {
  nav li {
    display: inline;
  }
}`}</Highlight>
        </figure>
        <Elem className="container">
          <Elem nav red>
            <ul>
              <li>
                <a href="percent.html">Home</a>
              </li>
              <li>
                <a href="percent.html">Taco Menu</a>
              </li>
              <li>
                <a href="percent.html">Draft List</a>
              </li>
              <li>
                <a href="percent.html">Hours</a>
              </li>
              <li>
                <a href="percent.html">Directions</a>
              </li>
              <li>
                <a href="percent.html">Contact</a>
              </li>
            </ul>
          </Elem>
          <Elem section green>
            <p>
              Now when you resize your browser it&apos;s even cooler than ever!
            </p>
          </Elem>
          <Elem section green className=" ipsum">
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
        <p className="content">
          Tada! Now our layout looks great even on mobile browsers. Here are{' '}
          <a href="http://mediaqueri.es/">
            some popular sites that use media queries this way
          </a>. There is a whole lot more you can detect than{' '}
          <code>min-width</code> and <code>max-width</code>: check out{' '}
          <a href="#">the MDN documentation</a> to learn more.
        </p>
        <div className="content">
          <h2>extra credit</h2>
          <p>
            You can make your layout look even better on mobile using{' '}
            <a href="#">meta viewport</a>.
          </p>
        </div>
       
      </React.Fragment>
    );
  }
}
