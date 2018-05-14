import React, { Component } from 'react';
import Highlight from 'react-highlight';
import Elem,{A}from './Elem';
import styled from 'styled-components';
const Li = styled.li`
          @media screen and (max-width: 599px) {
              display: inline;
          }
`;

        // <style jsx="true">{`
        //   @media screen and (min-width: 600px) {
        //     nav {
        //       float: left;
        //       width: 25%;
        //     }
        //     section {
        //       margin-left: 25%;
        //     }
        //   }
        // `}</style>
export default class media_queries extends Component<Props> {
  render() {
    let css_nav=`@media screen and (min-width: 600px) {
    float: left;
    width: 25%;
  }`;
    let css_section=`@media screen and (min-width: 600px) {
    margin-left: 25%;
  }`;
    return (
      <React.Fragment>
        <h1 className="content">media queries</h1>
        <p className="content">
          "Responsive Design" is the strategy of making a site that
          "responds" to the browser and device that it is being shown
          on... by looking awesome no matter what.
        </p>
        <p className="content">
          Media queries are the most powerful tool for doing this. Let&apos;s
          take our layout that uses percent widths and have it display in one
          column when the browser is too small to fit the menu in the sidebar:
        </p>
<figure className="highlight">
<AceEditor ref="editor"
                    style={{width:"200px",height:"100px"}}
                    mode={this.state.mode}
                    theme="github"
                    value={this.state.style_box}
                    onChange={this.onChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{$blockScrolling: true}}
                    />
</figure>
        <figure className="highlight">
          <Highlight>{`
@media screen and (min-width:600px) {
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
}
`}</Highlight>
        </figure>

        <Elem className="container">
          <Elem nav red css={css_nav}>
            <ul>
              <Li>
                <A href="percent.html">Home</A>
              </Li>
              <Li>
                <A href="percent.html">Taco Menu</A>
              </Li>
              <Li>
                <A href="percent.html">Draft List</A>
              </Li>
              <Li>
                <A href="percent.html">Hours</A>
              </Li>
              <Li>
                <A href="percent.html">Directions</A>
              </Li>
              <Li>
                <A href="percent.html">Contact</A>
              </Li>
            </ul>
          </Elem>
          <Elem section green css={css_section}>
            <p>
              Now when you resize your browser it&apos;s even cooler than ever!
            </p>
          </Elem>
          <Elem section green className=" ipsum" css={css_section}>
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
          <A href="http://mediaqueri.es/">
            some popular sites that use media queries this way
          </A>. There is a whole lot more you can detect than{' '}
          <code>min-width</code> and <code>max-width</code>: check out{' '}
          <A href="https://developer.mozilla.org/en-US/docs/CSS/Media_queries">the MDN documentation</A> to learn more.
        </p>
        <div className="content">
          <h2>extra credit</h2>
          <p>
            You can make your layout look even better on mobile using{' '}
            <A href="http://dev.opera.com/articles/view/an-introduction-to-meta-viewport-and-viewport/">meta viewport</A>.
          </p>
        </div>
       
      </React.Fragment>
    );
  }
}
