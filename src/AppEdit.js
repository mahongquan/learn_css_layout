import React, { Component } from 'react';
import Elem,{Tag,NavWrapper,LinkPrev,LinkStyle,A} from './Elem';
import styled from 'styled-components';
import AceEditor from 'react-ace';
import 'brace/mode/jsx';
import 'brace/theme/github';
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
class Root extends Component<Props> {
      constructor(){
      super();
      this.state= {
        jsx:jsx,
      }
    }
    jsxChange=(newValue)=>{
        this.setState({
            jsx:newValue
        });
    }
  render() {
    // console.log(this.props);
    return (
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
      </div>
    );
  }
}
export default Root;
