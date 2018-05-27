import React, { Component } from 'react';
import {LinkToc,Tag} from './Elem';
import AceEditor from 'react-ace';
import 'brace/mode/css';
import 'brace/theme/github';

const Toc_style=`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    align-items:center;
    align-content:center;
    justify-content:flex-start;
    @media screen and (min-width: 601px) {
       height: 650px; //two column
    }
`;

export default class toc extends Component<Props> {
      constructor(){
      super();
      this.state= {
        style_box:Toc_style,
        mode:"css",
        displayAce:"none",
      }
    }
    onChange=(newValue)=>{
        this.setState({
            style_box:newValue
        });
    }

  render() {
    return (
      <React.Fragment>
        <div className="content" style={{position:"relative"}}>
          <h1 className="content">Table of Contents</h1>

          <Tag css={this.state.style_box}>      
                  <LinkToc to="no-layout.html">no layout</LinkToc>
                  <LinkToc to="display.html">
                    the &quot;display&quot; property
                  </LinkToc>
                
                
                  <LinkToc to="margin-auto.html">margin: auto;</LinkToc>
                
                
                  <LinkToc to="max-width.html">max-width</LinkToc>
                
                
                  <LinkToc to="box-model.html">the box model</LinkToc>
                
                
                  <LinkToc to="box-sizing.html">box-sizing</LinkToc>
                
                
                  <LinkToc to="position.html">position</LinkToc>
                
                
                  <LinkToc to="position-example.html">position example</LinkToc>
                
                
                  <LinkToc to="float.html">float</LinkToc>
                
                
                  <LinkToc to="clear.html">clear</LinkToc>
                
                
                  <LinkToc to="clearfix.html">the clearfix hack</LinkToc>
                
                
                  <LinkToc to="float-layout.html">float layout example</LinkToc>
                
                
                  <LinkToc to="percent.html">percent width</LinkToc>
                
                
                  <LinkToc to="media-queries.html">media queries</LinkToc>
                
                
                  <LinkToc to="inline-block.html">inline-block</LinkToc>
                
                
                  <LinkToc to="inline-block-layout.html">inline-block layout</LinkToc>
                
                
                  <LinkToc to="column.html">column</LinkToc>
                
                
                  <LinkToc to="flexbox.html">flexbox</LinkToc>
                
                
                  <LinkToc to="frameworks.html">css frameworks</LinkToc>
                
                
                  <LinkToc to="about.html">about this site</LinkToc>
                
          </Tag>
                    <div
              style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"flex-end",
                position:"absolute",
                top:0,
                right:0}}>
              <button onClick={()=>{
                if(this.state.displayAce==="none"){
                  this.setState({displayAce:"block"})
                }
                else{
                  this.setState({displayAce:"none"}) 
                }
              }}>edit style</button>
              <AceEditor ref="editor"
                      style={{display:this.state.displayAce, width:"350px",height:"250px",border:"solid gray 5px"}}
                      mode={this.state.mode}
                      theme="github"
                      value={this.state.style_box}
                      onChange={this.onChange}
                      name="UNIQUE_ID_OF_DIV"
                      editorProps={{$blockScrolling: true}} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
