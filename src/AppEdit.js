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
#id1{
  border:"solid blue 2px";
  background-color:"#aaa";
  justify-content: "space-around";
  flex-wrap:"wrap";
  align-items: "flex-end";
  display:"flex";
  flex-direction:"row";
  overflow:"hidden";
  width:"300px";
  height:"300px";
}
.child{
  color:blue;
  margin:"0px 60px 10px 60px";
  padding:"20px 20px 20px 20px";
  border:"solid green 3px";
}
`;
const jsx=`
<div id="main" style={{
  border:"solid blue 2px",
  backgroundColor:"#aaa",
  justifyContent: "space-around",
  flexWrap:"wrap",
  alignItems: "flex-end",
  display:"flex",
  flexDirection:"row",
  overflow:"hidden",
  width:"300px",
  height:"300px"
}}>
    <div className="child"  style={{margin:"0px 60px 10px 60px",padding:"20px 20px 20px 20px",border:"solid green 3px"}}>--------</div>
    <div className="child" style={{border:"solid green 3px"}}>dddddddc</div>
    <div className="child" style={{border:"solid green 3px"}}>a</div>
    <div className="child" style={{border:"solid green 3px"}}>bbbb</div>
    <div className="child" style={{border:"solid green 3px"}}>dddddddc</div>
    <div className="child" style={{border:"solid green 3px"}}>a</div>
    <div className="child" style={{border:"solid green 3px"}}>bbbb</div>
    <div className="child" style={{border:"solid green 3px"}}>dddddddc</div>
    <div className="child" style={{border:"solid green 3px"}}>a</div>
    <div className="child" style={{border:"solid green 3px"}}>bbbb</div>
    <div className="child" style={{border:"solid green 3px"}}>dddddddc</div>
    <div className="child" style={{border:"solid green 3px"}}>a</div>
    <div className="child" style={{border:"solid green 3px"}}>bbbb</div>
    <div className="child" style={{border:"solid green 3px"}}>dddddddc</div>
    <div className="child" style={{border:"solid green 3px"}}>a</div>
    <div className="child" style={{border:"solid green 3px"}}>bbbb</div>
    <div className="child" style={{border:"solid green 3px"}}>dddddddc</div>
    <div className="child" style={{border:"solid green 3px"}}>a</div>
    <div className="child" style={{border:"solid green 3px"}}>bbbb</div>
    <div className="child" style={{border:"solid green 3px"}}>dddddddc</div>
    <div className="child" style={{border:"solid green 3px"}}>bbbb</div>
    <div className="child" style={{border:"solid green 3px"}}>dddddddc</div>
    <div className="child" style={{border:"solid green 3px"}}>a</div>
    <div className="child" style={{border:"solid green 3px"}}>bbbb</div>
    <div className="child" style={{border:"solid green 3px"}}>dddddddc</div>
    <div className="child" style={{border:"solid green 3px"}}>a</div>
    <div className="child" style={{border:"solid green 3px"}}>bbbb</div>
    <div className="child" style={{border:"solid green 3px"}}>dddddddc</div>
    <div className="child" style={{border:"solid green 3px"}}>a</div>
    <div className="child" style={{border:"solid green 3px"}}>bbbb</div>
    <div className="child" style={{border:"solid green 3px"}}>dddddddc</div>
    <div className="child" style={{border:"solid green 3px"}}>a</div>
    <div className="child" style={{border:"solid green 3px"}}>bbbb</div>
    <div className="child" style={{border:"solid green 3px"}}>dddddddc</div>
    <div className="child" style={{border:"solid green 3px"}}>a</div>
    <div className="child" style={{border:"solid green 3px"}}>bbbb</div>
    <div className="child" style={{border:"solid green 3px"}}>dddddddc</div>
    <div className="child" style={{border:"solid green 3px"}}>a</div>
    <div className="child" style={{border:"solid green 3px"}}>bbbb</div>
    <div className="child" style={{border:"solid green 3px"}}>dddddddc</div>
    <div className="child" style={{border:"solid green 3px"}}>a</div>
    <div className="child" style={{border:"solid green 3px"}}>bbbb</div>
    <div className="child" style={{border:"solid green 3px"}}>dddddddc</div>
    <div className="child" style={{border:"solid green 3px"}}>a</div>
    <div className="child" style={{border:"solid green 3px"}}>bbbb</div>
    <div className="child" style={{border:"solid green 3px"}}>dddddddc</div>
    <div className="child" style={{border:"solid green 3px"}}>a</div>
    <div className="child" style={{border:"solid green 3px"}}>bbbb</div>
    <div className="child" style={{border:"solid green 3px"}}>dddddddc</div>
    <div className="child" style={{border:"solid green 3px"}}>a</div>
    <div className="child" style={{border:"solid green 3px"}}>bbbb</div>
    <div className="child" style={{border:"solid green 3px"}}>dddddddc</div>
    <div className="child" style={{border:"solid green 3px"}}>a</div>
    <div className="child" style={{border:"solid green 3px"}}>bbbb</div>
    <div className="child" style={{border:"solid green 3px"}}>dddddddc</div>
</div>
`;

class Root extends Component<Props> {
      constructor(){
      super();
      this.state= {
        jsx:jsx,
        css:css,
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
          <LiveEditor />                  
        </LiveProvider>
        <div style={{minHeight:"100px"}}/>
      </div>
    );
  }
}
export default Root;
