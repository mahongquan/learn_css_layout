import React, { Component } from 'react';
import Highlight from 'react-highlight';
import Elem,{Div} from './Elem';
import AceEditor from 'react-ace';
import 'brace/mode/css';
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
`.box {
    float: left;
    width: 200px;
    height: 100px;
    margin: 1em;
}
.after-box {
    clear: left;
}`,
        style_box2:
`.box2 {
    display:inline-block;
    width: 200px;
    height: 100px;
    margin: 1em;
}`,

        mode:"css",
        after_box:"clear:left;"
      }
    }
    onChange=(newValue)=>{
        this.setState({
            style_box:newValue
        });
    }
    onChange2=(newValue)=>{
        this.setState({
            style_box2:newValue
        });
    }

    onChange_after=(newValue)=>{
        this.setState({
            after_box:newValue
        });
    }
    box1=(key)=>{
      return (
      <Elem key={key} className="box" css={this.state.style_box}>
        <p>I'm floating!</p>
      </Elem>
      );
    }
    box2=(key)=>{
      return  (
        <Elem key={key} className="box2" >
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
            <AceEditor ref="editor"
                    style={{width:"200px",height:"150px",border:"solid gray 5px"}}
                    mode={this.state.mode}
                    theme="github"
                    value={this.state.style_box}
                    onChange={this.onChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{$blockScrolling: true}} />
        </figure>
        <Div className="content" css={this.state.style_box}>
          {boxes}
          <Elem section green className="after-box">
            <p>
              I'm using clear so I don't float next to the above
              boxes.
            </p>
          </Elem>
        </Div>
        <div className="content">
          <h2>The Easy Way (using inline-block)</h2>
          <p>
            You can achieve the same effect using the <code>inline-block</code>{' '}
            value of the <code>display</code> property.
          </p>
        </div>
        <figure className="highlight">
            <AceEditor ref="editor"
                    style={{width:"300px",height:"100px",border:"solid gray 5px"}}
                    mode={this.state.mode}
                    theme="github"
                    value={this.state.style_box2}
                    onChange={this.onChange2}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{$blockScrolling: true}} />
        </figure>
        <Div className="content" css={this.state.style_box2}>
          {boxes2}
          <Elem green section>
            <p>
              I don't have to use <code>clear</code> in this case. Nice!
            </p>
          </Elem>
        </Div>
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
