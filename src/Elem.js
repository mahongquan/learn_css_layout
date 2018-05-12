import React, { Component } from 'react';
import cloneDeep from 'lodash.clonedeep';
export default class Elem extends Component<Props> {
  render() {
    let idstr,cls_str;
    let background="#6AC5AC";
    if (this.props.green){
      background="#96C02E";
    }
    if (this.props.orange){
      background="#FDC72F";
    }
    if (this.props.red){
      background="#D64078";
    }
    
    if(this.props.id){
      idstr=`id="${this.props.id}"`;
    }
    if(this.props.className){
      cls_str=`class="${this.props.className}"`;
    }
    let ComStr="div";
    if (this.props.article){
       ComStr="article";
     }
    if (this.props.nav){
       ComStr="nav";
    }
    if (this.props.footer){
       ComStr="footer"
    }
    if (this.props.section){
       ComStr="section"
    }
    var thestyle=cloneDeep(this.props.style);
    if(!thestyle) thestyle={};
    if(!thestyle.border) thestyle.border=`solid  ${background} 3px`;
    if(!thestyle.position) thestyle.position="relative";
    return (
        <ComStr id={this.props.id} 
          style={thestyle} className={this.props.className}>
          <span style={{
            top: 0,
            left: 0,
            padding: "0 3px 3px 0",
            position: "absolute",
            backgroundColor: background,
            color: "#414142"}}>&lt;{ComStr} {idstr}{" "}{cls_str}&gt;</span>
          {this.props.children}
          <span  style={{
            right: 0,
            bottom: 0,
            padding: "3px 0 0 3px",
            position: "absolute",
            backgroundColor: background,
            color: "#414142"}}>&lt;/{ComStr}&gt;</span>
        </ComStr>);
  }
}
