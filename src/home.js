import React, { Component } from 'react';
import TranLinks from './TranLinks';
import styled from 'styled-components';
import Elem,{NavWrapper,LinkNext,LinkNav} from './Elem';
const About = styled.div`
            max-width: 550px;
            margin: 0 auto 2em;
            padding: 0 1rem;
`;

export default class index extends Component<Props> {
  render() {
    return (
      <React.Fragment>

        <About >
          <p>
            This site teaches the CSS fundamentals that are used in any
            website&apos;s layout.
          </p>
          <p>
            I assume you already know what selectors, properties, and values
            are. And you probably know a thing or two about layout, though it
            may still be a rage-provoking activity for you. If you want to learn
            HTML and CSS from the beginning, you should check out{' '}
            <a href="http://learn.shayhowe.com/html-css/">this tutorial</a>.
            Otherwise, let&apos;s see if we can save you some fury on your next
            project.
          </p>
        </About>

      <TranLinks />
      </React.Fragment>
    );
  }
}
