import React, { Component } from 'react';
export default class ElemInline extends Component<Props> {
  render() {
    return (
        <span  style={{
          border: "solid  #6AC5AC 3px",
          position: "relative"
        }}>
          <span style={{
            position: "static",
            backgroundColor: "#6AC5AC",
            color: "#414142"}} >&lt;span &gt;</span>
          {this.props.children}
          <span style={{
            position: "static",
            backgroundColor: "#6AC5AC",
            color: "#414142"}}>&lt;/span&gt;</span>
        </span>);  
  }
}
