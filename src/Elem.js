import React, { Component } from 'react';
import cloneDeep from 'lodash.clonedeep';
import styled from 'styled-components';
const Label = styled.span`
  position: absolute;
  background-color: #6AC5AC;
  color: #414142;
  line-height: 1em;
`;
const StartLabel=Label.extend`
  top: 0;
  left: 0;
  padding: 0 3px 3px 0;
`;
const EndLabel=Label.extend`
  right: 0;
  bottom: 0;
  padding: 3px 0 0 3px;
`;
const Element=styled.div`
  border: solid  #6AC5AC 3px;
  position: relative;
`;
export default class Elem extends Component<Props> {
  constructor(){
    super();
  }
  render() {
    let idstr,cls_str;
    let StartLabel1,EndLabel1;
    let background;
    if (this.props.green){
      background="#96C02E";
    }
    if (this.props.orange){
      background="#FDC72F";
    }
    if (this.props.red){
      background="#D64078";
    }
    if(background){
      StartLabel1=StartLabel.extend`
        background-color:${background}
      `;
      EndLabel1=EndLabel.extend`
        background-color:${background}
      `;
    }
    else{
      StartLabel1=StartLabel;
      EndLabel1=EndLabel;
      background="#6AC5AC";
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
    console.log(thestyle);

    return (
        <Element id={this.props.id} style={thestyle} className={this.props.className}>
          <StartLabel1>&lt;{ComStr} {idstr}{" "}{cls_str}&gt;</StartLabel1>
          {this.props.children}
          <EndLabel1>&lt;/{ComStr}&gt;</EndLabel1>
        </Element>);
  }
}
