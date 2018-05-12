import React, { Component } from 'react';
import styled from 'styled-components';
const Label = styled.span`
  position: static;
  background-color: #6AC5AC;
  color: #414142;
  line-height: 1em;
`;
export default class ElemInline extends Component<Props> {
  render() {
    return (
        <span  style={{
          border: "solid  #6AC5AC 3px",
          position: "relative"
        }}>
          <Label >&lt;span &gt;</Label>
          {this.props.children}
          <Label >&lt;/span&gt;</Label>
        </span>);  
  }
}
