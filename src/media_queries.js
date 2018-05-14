import React, { Component } from 'react';
import Elem,{A}from './Elem';
import AceEditor from 'react-ace';
import 'brace/mode/css';
import 'brace/theme/github';
export default class media_queries extends Component<Props> {
      constructor(){
      super();
      this.state= {
        style_container:
`@media screen and (min-width:600px) {
  nav {
    float: left;
    width: 25%;
  }
  section {
    margin-left: 25%;
  }
}`,
        mode:"css",
      }
    }
    onChange=(newValue)=>{
        this.setState({
            style_container:newValue
        });
    }
  render() {

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
                    style={{width:"400px",height:"200px"}}
                    mode={this.state.mode}
                    theme="github"
                    value={this.state.style_container}
                    onChange={this.onChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{$blockScrolling: true}}
                    />
</figure>
        <Elem className="container" css={this.state.style_container}>
          <Elem tag="nav" color="blue" >
            <ul>
              <li>
                <A href="percent.html">Home</A>
              </li>
              <li>
                <A href="percent.html">Taco Menu</A>
              </li>
              <li>
                <A href="percent.html">Draft List</A>
              </li>
              <li>
                <A href="percent.html">Hours</A>
              </li>
              <li>
                <A href="percent.html">Directions</A>
              </li>
              <li>
                <A href="percent.html">Contact</A>
              </li>
            </ul>
          </Elem>
          <Elem tag="section" color="green" >
            <p>
              Now when you resize your browser it&apos;s even cooler than ever!
            </p>
          </Elem>
          <Elem tag="section" color="green" className=" ipsum" >
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
