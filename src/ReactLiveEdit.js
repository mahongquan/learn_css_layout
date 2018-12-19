import React, { Component } from 'react';
import Elem,{Tag,NavWrapper,LinkPrev,LinkStyle,A} from './Elem';
import styled from 'styled-components';
import Ace from './Ace';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
const jsx=`
<div style={{
  justifyContent: "flex-start",
  alignItems: "baseline",
  display:"flex",
  flexDirection:"row",
  width:"300px",
  height:"300px"
}}>
    <div style={{border:"solid green 3px"}}>a</div>
    <div style={{border:"solid green 3px"}}>bbbb</div>
    <div style={{border:"solid green 3px"}}>dddddddc</div>
</div>
`;
const css=`
#main{
  margin:auto;
  border:solid blue 2px;
  background-color:#aaa;
  justify-content: space-between;
  flex-wrap:wrap;
  align-items: stretch;
  display:flex;
  flex-direction:column;
  overflow:hidden;
  width:100vw;
  height:100vh;
}
#header{
  height:50px;
  margin:1px;
  background-color:#bbb;
}
#footer{
  height:50px;
  margin:1px;
  background-color:#ccc;
}
#content{
  border:solid green 3px;
  background-color:#aaa;
  justify-content: space-around;
  flex-wrap:wrap;
  align-items: stretch;
  display:flex;
  flex-direction:row;
  overflow:hidden;
  flex:1;
}
#sidebar{
  background-color:#999;
  width:200px;
}
#mainbody{
  background-color:#888;
  margin:0 0 0 0;
  flex:1;
 width:200px;
 border:solid orange 2px;
}
#body{
    border:solid orange 2px;
    flex:1;
    
}

`;
const jsx=`<div id="main" >
 <div id="header">
   toolbar
 </div>
 <div id="content" >
   <div id="sidebar">sitebar</div>      
<<<<<<< HEAD:src/ReactLiveEdit.js
   <div id="mainbody">body</div>
   <div id="body">body</div>
>>>>>>> 7619665f5e5c67a54d2384645830b8124c25d7d2:src/AppEdit.js
 </div>
 <div id="footer" >footer</div>
</div>
`;

class Root extends Component<Props> {
      constructor(){
      super();
      this.state= {
        jsx:jsx,
      }
    }
    jsxChange=(newValue)=>{
        this.setState({
            jsx:newValue,
        css:css,
        displayLE:"none",
      }
    }
    cssChange=(newValue)=>{
        this.setState({
            css:newValue
        });
    }
  render() {
    // console.log(this.props);
    return (
      <div style={{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"}}>
      <div>
      <LiveProvider code={this.state.jsx}>
  <LiveEditor />
  <LiveError />
  <LivePreview />
</LiveProvider>
        <AceEditor ref="editor"
                    style={{   height:"300px"
                                ,border:"solid gray 5px"
                              }}
                    mode="jsx"
                    theme="github"
                    value={this.state.jsx}
                    onChange={this.jsxChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{$blockScrolling: true}} />

        <div style={{minHeight:"100px"}}/>
      <div style={{position:"relative"}}>
        <Ace css={this.state.css} cssChange={this.cssChange} />
        <LiveProvider code={this.state.jsx}>
          <Tag css={this.state.css}>
            <LivePreview />
          </Tag>
          <LiveError />
          <div style={{position:"absolute",left:0,top:0}}>
            <button onClick={()=>{
                if(this.state.displayLE=="none"){
                  this.setState({displayLE:"block"})
                }
                else{
                  this.setState({displayLE:"none"}) 
                }
              }}>edit  jsx</button>
            <LiveEditor style={{
              display:this.state.displayLE,
              overflow:"auto",
              width:"300px",
              height:"300px"}}/>                  
          </div> 
        </LiveProvider>
        <style jsx="true">
        {`
* {
      box-sizing: border-box;
    }
    html {
      font-size: 1rem;
      overflow-wrap: break-word;
    }
    body {
      margin: 0;
      padding: 0;
    }           
        `}
        </style>
      </div>
    );
  }
}
export default Root;
