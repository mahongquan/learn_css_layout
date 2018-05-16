import React, { Component } from 'react';
import Elem,{Tag,NavWrapper,LinkPrev,LinkStyle,A} from './Elem';
import styled from 'styled-components';
import Ace from './Ace';
import AppFlex from './AppFlex';
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
  justify-content: space-around;
  flex-wrap:wrap;
  align-items: stretch;
  display:flex;
  flex-direction:row;
  overflow:hidden;
  width:300px;
  height:600px;
}
.child{
  color:blue;
  margin:1px;
  border:solid green 3px;
}
#main2{
  border:solid orange 2px;
  background-color:#aaa;
  justify-content: space-around;
  flex-wrap:wrap;
  align-items: stretch;
  display:flex;
  flex-direction:column;
  overflow:hidden;
}
.child2{
  color:blue;
  margin:1px;
  border:solid green 3px;
}

`;
const jsx=`

<div id="main" >
    <div id="main2" className="child" >
      <div className="child2" >dddddddc</div>
      <div className="child2" ></div>
      <div className="child2" >bbbb</div>
      <div className="child2" >dddddddc</div>
      <div className="child2" >a</div>
    </div>
    <div className="child" >dddddddc</div>
    <div className="child" >a</div>
    <div className="child" >bbbb</div>
    <div className="child" >dddddddc</div>
    <div className="child" >a</div>
    <div className="child" >bbbb</div>
    <div className="child" >dddddddc</div>

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
        <AppFlex />
        <div style={{minHeight:"100px"}}/>
      </div>
    );
  }
}
export default Root;
