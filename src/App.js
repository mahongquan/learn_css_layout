import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
class Root extends Component<Props> {
  render() {
    // console.log(this.props);
    return (
      <div>
        <style jsx="true">{`
          body {
            margin: 0;
            padding: 0 0 1em 0;
            font-size: 1em;
            line-height: 1.5em;
            color: #414142;
            font-family: Arial;
            background-color: #ededed;
          }

          body.rtl {
            direction: rtl;
          }

          body.rtl code {
            display: inline-block;
            direction: ltr;
          }

          body.rtl pre code {
            display: block;
          }

          * {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          }

          img {
            max-width: 100%;
          }

          p {
            margin: 1em 0;
          }

          p code,
          li code {
            background-color: #ececec;
          }

          h1,
          h2 {
            font-family: 'Bree Serif', serif;
            font-weight: normal;
          }

          h1 {
            margin: 1.5em 0;
            font-weight: normal;
            text-align: center;
          }

          h2 {
            font-family: 'Bree Serif', serif;
            margin: 1.2em 0;
            font-weight: normal;
          }

          a:link {
            color: #d64078;
            text-decoration: none;
          }

          a:visited {
            color: #d64078;
          }

          a:hover {
            text-decoration: underline;
          }

          a:active {
            background-color: black;
            color: white;
          }

          #menu {
            background-color: whiteSmoke;
            text-align: center;
          }

          #menu a {
            color: #8f8f8f;
            display: inline-block;
            padding: 0.5em 1em;
            text-shadow: 0 1px 0 #ededed;
            text-decoration: none;
          }

          #menu a:hover {
            background: rgb(220, 220, 220);
          }

          #menu .home-link {
            margin-right: 1em;
          }

          #logo {
            text-align: center;
            background-color: #ededed;
            padding: 1em 0;
          }

          #logo a {
            text-decoration: none;
            color: #414142;
            position: relative;
          }

          #logo a:active {
            background: none;
          }

          #logo img {
            vertical-align: middle;
          }

          #logo span {
            vertical-align: middle;
            font-size: 2em;
            font-family: 'Bree Serif', serif;
            margin-left: 0.2em;
          }

          #container {
            padding: 1em;
            margin: 0 0 1em 0;
            background-color: white;
          }

          .content {
            max-width: 600px;
            margin: 1em auto;
          }

          h1.content {
            margin: 0.5em auto 1em;
          }

          .ipsum {
            color: #734161;
            background-color: #eee;
          }

          .highlight {
            margin: 2em auto;
            max-width: 600px;
            line-height: 1.2em;
            font-size: 16px;
            direction: ltr;
          }

          a.nav:before {
            height: 5px;
            width: 100%;
            background: white;
            position: absolute;
            content: '';
            top: -6px;
            left: 0;
          }

          a.nav {
            background-color: #d64078;
            color: white;
            border-radius: 0.3em;
            padding: 0.2em 0;
            position: relative;
            margin: 0 1.5em;
            width: 10em;
            display: inline-block;
            text-decoration: none;
            border: solid #b03060 1px;
            border-bottom: solid #b03060 4px;
            text-shadow: 0px 2px 0 #b03060;
            -webkit-transition: all 0.1s ease-out; /* Safari 3.2+, Chrome */
            -moz-transition: all 0.1s ease-out; /* Firefox 4-15 */
            -o-transition: all 0.1s ease-out; /* Opera 10.5â12.00 */
            transition: all 0.1s ease-out; /* Firefox 16+, Opera 12.50+ */
          }

          a.nav.prev {
            margin-left: 0;
          }

          a.nav.next {
            margin-right: 0;
          }

          a.nav:hover {
            background-color: #c63b6f;
          }

          a.nav:active {
            border-bottom: solid #b03060 1px;
            top: 4px;
            -webkit-transition: all 0 ease-out; /* Safari 3.2+, Chrome */
            -moz-transition: all 0 ease-out; /* Firefox 4-15 */
            -o-transition: all 0 ease-out; /* Opera 10.5â12.00 */
            transition: all 0 ease-out; /* Firefox 16+, Opera 12.50+ */
          }

          .nav-wrapper {
            text-align: center;
            padding: 1em 0;
            clear: both;
          }

          .prev {
            left: 1em;
            background-color: gray;
            text-shadow: 2px 2px 0 gray;
            border: none;
          }

          .next {
            right: 1em;
          }

          footer {
            text-align: center;
          }
          @media screen and (min-width: 601px) {
            #menu {
              position: absolute;
              top: -16px;
              left: -20px;
              width: 250px;
              padding-top: 2em;
              -webkit-transform-origin: 0 0;
              -moz-transform-origin: 0 0;
              -ms-transform-origin: 0 0;
              -o-transform-origin: 0 0;
              transform-origin: 0 0;
              -webkit-transform: rotate(-35deg) translate(-92px, 22px); /* Safari 3.1+, Chrome */
              -moz-transform: rotate(-35deg) translate(-92px, 22px); /* Firefox 3.5-15 */
              -ms-transform: rotate(-35deg) translate(-92px, 22px); /* IE9+ */
              -o-transform: rotate(-35deg) translate(-92px, 22px); /* Opera 10.5-12.00 */
              transform: rotate(-35deg) translate(-92px, 22px); /* Firefox 16+, Opera 12.50+ */
            }

            .rtl #menu {
              position: absolute;
              top: -16px;
              left: auto;
              right: -20px;
              width: 250px;
              padding-top: 2em;
              -webkit-transform-origin: 0 0;
              -moz-transform-origin: 0 0;
              -ms-transform-origin: 0 0;
              -o-transform-origin: 0 0;
              transform-origin: 0 0;
              -webkit-transform: rotate(35deg) translate(62px, -129px); /* Safari 3.1+, Chrome */
              -moz-transform: rotate(35deg) translate(62px, -129px); /* Firefox 3.5-15 */
              -ms-transform: rotate(35deg) translate(62px, -129px); /* IE9+ */
              -o-transform: rotate(35deg) translate(62px, -129px); /* Opera 10.5-12.00 */
              transform: rotate(35deg) translate(62px, -129px); /* Firefox 16+, Opera 12.50+ */
            }

            #menu a {
              display: block;
              padding: 0.2em 0;
            }
          }

          @media screen and (max-width: 600px) {
            #logo img {
              width: 15%;
            }
          }

          @media screen and (max-width: 404px) {
            a.nav {
              width: 40%;
            }

            h1,
            #logo span {
              font-size: 1.5em;
            }
          }
        `}</style>
        <div id="logo">
          <a href="/">
            <img src="./images/logo.png" alt="logo" />
            <span>Learn CSS Layout</span>
          </a>
        </div>
        <div id="menu">
          <Link className="home-link" to="/">
            Home
          </Link>
          <Link to="/toc.html">Table of Contents</Link>
        </div>

        <div id="container">{this.props.children}</div>
      </div>
    );
  }
}
export default withRouter(Root);
