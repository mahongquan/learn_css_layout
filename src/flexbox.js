import React, { Component } from 'react';
import Highlight from 'react-highlight';
import Elem  from './Elem';
import Ace from './Ace';
const alignitems_options=["center","flex-start","flex-end","stretch","baseline","inherit","initial"];
const justifycontent_options=["center","flex-start","flex-end","space-around","space-between"];
const menu_style=`height: 100vh;
display: flex;
>nav {
  width: 200px;
  overflow:auto;
}
.flex-column {
  overflow:auto;
  flex: 1;
}
`;
const css_fancy=`display: flex;
.initial {
  flex: initial;
  width: 200px;
  min-width: 100px;
}
.none {
  flex: none;
  width: 200px;
}
.flex1 {
  flex: 1;
}
.flex2 {
  flex: 2;
}
`;
const css_va=`height: 300px;
display: flex;
align-items: center;
justify-content: center;
`;
export default class flexbox extends Component<Props> {
  constructor(){
      super();
      this.state= {
        style:menu_style,
        css_fancy:css_fancy,
        css_va:css_va,
        alignitems:"center",
        justifycontent:"center",
        mode:"css",
        displayAce:"none",
      }
    }
    onChange=(newValue)=>{
        this.setState({
            style_box:newValue
        });
    }
     justifycontentChange=(e)=>{
        this.setState({justifycontent:e.target.value});
    }
    alignitemsChange=(e)=>{
        this.setState({alignitems:e.target.value});
    }

  render() {
    var justifycontent_options2=justifycontent_options.map((one,key)=>{
      return <option key={key} value={one}>{one}</option>;
    })
    var alignitems_options2=alignitems_options.map((one,key)=>{
      return <option key={key} value={one}>{one}</option>;
    })
    var css=`height: 300px;
display: flex;
align-items: ${this.state.alignitems};
-webkit-align-items: ${this.state.alignitems};
justify-content: ${this.state.justifycontent};
`;

    return (
      <React.Fragment>
        <h1 className="content">flexbox</h1>
        
        <p className="content">
          The new <code>flexbox</code> layout mode is poised to redefine how we
          do layouts in CSS. Unfortunately the specification has changed a lot
          recently, so it&apos;s implemented differently in different browsers.
          Still, I&apos;d like to share a couple examples so you know
          what&apos;s coming up. These examples currently only work{' '}
          <a href="http://caniuse.com/flexbox">some browsers</a> that use the{' '}
          <a href="http://www.w3.org/TR/css3-flexbox/">latest version of the standard</a>.
        </p>
        <p className="content">
          There are a lot of out-of-date flexbox resources around. If you want
          to learn more about flexbox, <a href="http://css-tricks.com/old-flexbox-and-new-flexbox/">start here</a> to learn how
          to identify if a resource is current or not. I have written a{' '}
          <a href="http://weblog.bocoup.com/dive-into-flexbox/">detailed article using the latest syntax</a>.
        </p>
        <p className="content">
          There is a lot more you can do with flexbox; these are just a few
          examples to give you an idea:
        </p>
        <div className="highlight" style={{position:"relative"}}>
          <h2 className="content">Simple Layout using Flexbox</h2>
          <Ace css={this.state.style} cssChange={(newValue)=>{
            this.setState({style:newValue});
          }} />
        </div>
        <Elem className="container" css={this.state.style}>
          <Elem tag="nav" color="#D64078">
            <ul>
              <li>
                <a >Home</a>
              </li>
              <li>
                <a >Taco Menu</a>
              </li>
              <li>
                <a >Draft List</a>
              </li>
              <li>
                <a >Hours</a>
              </li>
              <li>
                <a >Directions</a>
              </li>
              <li>
                <a >Contact</a>
              </li>
              <li>
                <a >Home</a>
              </li>
              <li>
                <a >Taco Menu</a>
              </li>
              <li>
                <a >Draft List</a>
              </li>
              <li>
                <a >Hours</a>
              </li>
              <li>
                <a >Directions</a>
              </li>
              <li>
                <a >Contact</a>
              </li>
              <li>
                <a >Home</a>
              </li>
              <li>
                <a >Taco Menu</a>
              </li>
              <li>
                <a >Draft List</a>
              </li>
              <li>
                <a >Hours</a>
              </li>
              <li>
                <a >Directions</a>
              </li>
              <li>
                <a >Contact</a>
              </li>
            </ul>
          </Elem>
          <Elem color="#D64078" className="flex-column">
            <Elem color="green" tag="section">
              <p>Flexbox is so easy!</p>
            </Elem>
            <Elem tag="section" color="#96C02E" className="ipsum">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                egestas odio, vitae scelerisque enim ligula venenatis dolor.
                Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
                Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula,
                facilisis sed ornare eu, lobortis in odio. Praesent convallis
                urna a lacus interdum ut hendrerit risus congue. Nunc sagittis
                dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
                sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui
                eget tellus gravida venenatis. Integer fringilla congue eros non
                fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
                purus. Mauris quis diam velit.
              </p>
            </Elem>
          </Elem>
        </Elem>
        
        <div className="highlight" style={{position:"relative"}}>
          <h2 className="content">Fancy Layout using Flexbox</h2>
          <Ace css={this.state.css_fancy} cssChange={(newValue)=>{
            this.setState({css_fancy:newValue});
          }} />
        </div>
        
        <Elem className="container"  css={this.state.css_fancy}>
          <Elem tag="section" color="green" className="initial">
            <p>
              I will be 200px when there is room, and I will shrink down to
              100px if there is not room, but no smaller.
            </p>
          </Elem>
          <Elem color="green" tag="section" className="none">
            <p>I will always be 200px, no matter what.</p>
          </Elem>
          <Elem color="green" tag="section" className="flex1">
            <p>I will fill up 1/3 of the remaining width.</p>
          </Elem>
          <Elem color="green" tag="section" className="flex2">
            <p>I will fill up 2/3 of the remaining width.</p>
          </Elem>
        </Elem>
        
        <div className="highlight" style={{position:"relative"}}>
          <h2 className="content">Centering using Flexbox</h2>
          <Ace css={this.state.css_va} cssChange={(newValue)=>{
            this.setState({css_va:newValue});
          }} />
        </div>
        <Elem className="vertical-container" css={this.state.css_va}>
          <Elem tag="section" color="green" style={{width:"89px",height:"100px",overflow:"auto"}}>
            <p>
              Finally, it&apos;s easy to vertically center something in CSS!
            </p>
          </Elem>
          <Elem tag="section" color="green"  style={{width:"100px",height:"160px",overflow:"auto"}}>
            <p>
              Finally, it&apos;s easy to vertically center something in CSS!
            </p>
          </Elem>
          <Elem tag="section" color="green"   style={{width:"190px",height:"190px",overflow:"auto"}}>
            <p>
              Finally, it&apos;s easy to vertically center something in CSS!
            </p>
          </Elem>
        </Elem>
         <div className="highlight" style={{position:"relative"}}>
          <h2 className="content">Flexbox Test</h2>
          justify-content:<select onChange={this.justifycontentChange}>{justifycontent_options2}</select>
          align-items:<select onChange={this.alignitemsChange}>{ alignitems_options2}</select>
          
        </div>
        <Elem className="vertical-container" css={css}>
          <Elem tag="section" color="green" style={{width:"89px",height:"100px",overflow:"auto"}}>
            <p>
              Finally, it&apos;s easy to vertically center something in CSS!
            </p>
          </Elem>
          <Elem tag="section" color="green"  style={{width:"100px",height:"160px",overflow:"auto"}}>
            <p>
              Finally, it&apos;s easy to vertically center something in CSS!
            </p>
          </Elem>
          <Elem tag="section" color="green"   style={{width:"190px",height:"190px",overflow:"auto"}}>
            <p>
              Finally, it&apos;s easy to vertically center something in CSS!
            </p>
          </Elem>
        </Elem>

      </React.Fragment>
    );
  }
}
