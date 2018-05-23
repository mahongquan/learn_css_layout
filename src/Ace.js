import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/css';
import 'brace/theme/github';
export default class Root extends Component<Props> {
     constructor(){
      super();
      this.state= {
        mode:"css",
        displayAce:"none",
      }
    }
   
    render=()=>{
<<<<<<< HEAD
=======
        var d=new Date();
>>>>>>> refs/remotes/origin/master
        return(
        <div
            style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"flex-end",
                position:"absolute",
<<<<<<< HEAD
                zIndex:101,
=======
>>>>>>> refs/remotes/origin/master
                top:0,
                right:0}}>
            <button onClick={()=>{
              if(this.state.displayAce=="none"){
                this.setState({displayAce:"block"})
              }
              else{
                this.setState({displayAce:"none"}) 
              }
            }}>edit  style</button>
<<<<<<< HEAD
            <AceEditor ref="editor"
                    style={{    display:this.state.displayAce
=======
            <AceEditor style={{    display:this.state.displayAce
>>>>>>> refs/remotes/origin/master
                                ,width:"300px",height:"300px"
                                ,border:"solid gray 5px"
                              }}
                    mode={this.state.mode}
                    theme="github"
                    value={this.props.css}
                    onChange={this.props.cssChange}
<<<<<<< HEAD
                    name="UNIQUE_ID_OF_DIV"
=======
                    name={""+d}
>>>>>>> refs/remotes/origin/master
                    editorProps={{$blockScrolling: true}} />
        </div>);
    }
}