import React, { Component } from 'react';
import Highlight from 'react-highlight';
import Elem from './Elem';
import AceEditor from 'react-ace';
import 'brace/theme/github';
export default class inline_block extends Component<Props> {
    constructor(){
      super();
      this.arr1=[];
      for (var i = 0; i < 2; i++) {
        this.arr1.push(i);
      }
      this.state= {
        style_box:
`float: left;
width: 200px;
height: 100px;
margin: 1em;`,
        mode:"text",
        after_box:"clear:left;"
      }
    }
    onChange=(newValue)=>{
        this.setState({
            style_box:newValue
        });
    }
    onChange_after=(newValue)=>{
        this.setState({
            after_box:newValue
        });
    }
    box1=(key)=>{
      return (
      <Elem key={key} title="box" css={this.state.style_box}>
        <p>I'm floating!</p>
      </Elem>
      );
    }
    box2=(key)=>{
      return  (
        <Elem key={key} title="box2" style={{
              display: "inline-block",
              width: "200px",
              height: "100px",
              margin: "1em"}}>
          <p>I am inline box!</p>
        </Elem>
      );
    }
  render() {

    var boxes = this.arr1.map((one,key)=>{
       return this.box1(key);
    });
    var boxes2 = this.arr1.map((one,key)=>{
       return this.box2(key);
    });
    return (
      <React.Fragment>
        <h1 className="content">inline-block</h1>
        <p className="content">
          You can create a grid of boxes that fills the browser width and wraps
          nicely. This has been possible for a long time using{' '}
          <code>float</code>, but now with <code>inline-block</code> it's
          even easier. <code>inline-block</code> elements are like{' '}
          <code>inline</code> elements but they can have a width and height.
          Let's look at examples of both approaches.
        </p>
        <div className="content">
          <h2>The Hard Way (using float)</h2>
        </div>
        <figure className="highlight">
        <div style={{
          display:"flex" //,justifyContent:"center"
        }}>
         <div style={{display:"flex",flexDirection:"column"}}>
            <label>style of box</label>
            <AceEditor ref="editor"
                    style={{width:"200px",height:"100px"}}
                    mode={this.state.mode}
                    theme="github"
                    value={this.state.style_box}
                    onChange={this.onChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{$blockScrolling: true}}
                    />
          </div>
          <div style={{display:"flex",flexDirection:"column"}}>
                <label>style of after box</label>
                <AceEditor ref="editor"
                style={{width:"200px",height:"100px"}}
                mode={this.state.mode}
                theme="github"
                value={this.state.after_box}
                onChange={this.onChange_after}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{$blockScrolling: true}}
                />
            </div>
        </div>
        </figure>
        <div className="content">
          {boxes}
          <Elem section green css={this.state.after_box}>
            <p>
              I'm using clear so I don't float next to the above
              boxes.
            </p>
          </Elem>
        </div>
        <div className="content">
          <h2>The Easy Way (using inline-block)</h2>
          <p>
            You can achieve the same effect using the <code>inline-block</code>{' '}
            value of the <code>display</code> property.
          </p>
        </div>
        <figure className="highlight">
          <Highlight>{`.box2 {
  display: inline-block;
  width: 200px;
  height: 100px;
  margin: 1em;
}`}</Highlight>
        </figure>
        <div className="content">
          {boxes2}
          <Elem green section>
            <p>
              I don't have to use <code>clear</code> in this case. Nice!
            </p>
          </Elem>
        </div>
        <p className="content">
          You have to do extra work for <a href="http://blog.mozilla.org/webdev/2009/02/20/cross-browser-inline-block/">IE6 and IE7 support</a> of{' '}
          <code>inline-block</code>. Sometimes people talk about{' '}
          <code>inline-block</code> triggering something called{' '}
          <code>hasLayout</code>, though you only need to know about that to
          support old browsers. Follow the previous link about IE6 and IE7
          support if you're curious to learn more. Otherwise, let's
          continue.
        </p>

      </React.Fragment>
    );
  }
}
