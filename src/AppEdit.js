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
  border:solid green 3px;
}
#footer{
  height:50px;
  margin:1px;
  border:solid green 3px;
}
#content{
  border:solid orange 2px;
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
   <div id="body">body</div>
 </div>
 <div id="footer" >footer</div>
</div>
`;

class Root extends Component<Props> {
      constructor(){
      super();
      this.state= {
        jsx:jsx,
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

      </div>
    );
  }
}
export default Root;
