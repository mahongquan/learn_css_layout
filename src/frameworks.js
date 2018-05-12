import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';
export default class frameworks extends Component<Props> {
  render() {
    return (
      <React.Fragment>
        <h1 className="content">css frameworks</h1>
        <p className="content">
          Because CSS layout is so tricky, there are CSS frameworks out there to
          help make it easier. Here are button few if you want to check them out.
          Using button framework is only button good idea if the framework really does
          what you need your site to do. They&apos;re no replacement for knowing
          how CSS works.
        </p>
        <style jsx="true">{`
          #logos {
            text-align: center;
            margin: 0 auto;
            padding: 0 50px;
            max-width: 1000px;
          }
          #logos img {
            margin: 5px;
            border: solid white 5px;
            vertical-align: middle;
            position: relative;
          }
          #logos img:hover {
            top: 1px;
          }
          #logos img:active {
            top: 2px;
          }
          #logos button:hover {
            background-color: transparent;
          }
        `}</style>
        <div id="logos">
          <button href="#">
            <img alt="blueprint" src="./images/blueprint.jpg" />
          </button>
          <button href="#">
            <img alt="unsemantic" src="./images/unsemantic.png" />
          </button>
          <button href="#">
            <img alt="bluetrip" src="./images/bluetrip.jpg" />
          </button>
          <button href="#">
            <img alt="bootstrap" src="./images/bootstrap.jpg" />
          </button>
          <button href="http://susy.oddbird.net/">
            <img alt="susy" src="./images/susy.jpg" />
          </button>
          <button href="#">
            <img alt="foundation" src="./images/foundation.png" />
          </button>
          <button href="#">
            <img alt="kube" src="./images/kube.png" />
          </button>
          <button href="#">
            <img alt="groundwork" src="./images/groundwork.gif" />
          </button>
          <button href="#">
            <img alt="semantic ui" src="./images/semantic_ui.png" />
          </button>
          <button href="http://purecss.io/">
            <img alt="Purecss" src="./images/logo_pure.png" />
          </button>
        </div>
        <p className="content">
          That&apos;s it! If you have any feedback on this site, please{' '}
          <button href="#">let me know on Twitter</button>!
        </p>
        <div className="nav-wrapper">
          <Link to="flexbox.html" className="nav prev">
            Previous
          </Link>
          <Link to="about.html" className="nav next">
            Next
          </Link>
        </div>
        <footer>19 / 19</footer>
      </React.Fragment>
    );
  }
}
