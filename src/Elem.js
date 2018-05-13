import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const LinkToc = styled(Link)`
         width: 15em;
            display: inline-block;
            text-decoration: none;
            text-align: center;
            padding: 0.5em;
            color: #fff;
            background-color: #d64078;
            border: solid #b03060 1px;
            border-bottom: solid #b03060 4px;
            text-shadow: 0px 2px 0 #b03060;
            border-radius: 0.3em;
            position: relative;
            -webkit-transition: all 0.1s ease-out; /* Safari 3.2+, Chrome */
            -moz-transition: all 0.1s ease-out; /* Firefox 4-15 */
            -o-transition: all 0.1s ease-out; /* Opera 10.5â12.00 */
            transition: all 0.1s ease-out; /* Firefox 16+, Opera 12.50+ */
:link {
            color: #d64078;
            text-decoration: none;
          }
          :hover {
            text-decoration: none;
            background-color: #c63b6f;
          }

          :active {
            border-bottom: solid #b03060 1px;
            top: 4px;
            -webkit-transition: all 0 ease-out; /* Safari 3.2+, Chrome */
            -moz-transition: all 0 ease-out; /* Firefox 4-15 */
            -o-transition: all 0 ease-out; /* Opera 10.5â12.00 */
            transition: all 0 ease-out; /* Firefox 16+, Opera 12.50+ */
          }
          :before {
            height: 5px;
            width: 100%;
            background: white;
            position: absolute;
            content: '';
            top: -6px;
            left: 0;
          }
`;
export const NavWrapper = styled.div`
            text-align: center;
            padding: 1em 0;
            clear: both;
`;
export const A = styled.a`
        :link {
            color: #d64078;
            text-decoration: none;
          }

          :visited {
            color: #d64078;
          }

          :hover {
            text-decoration: underline;
          }

          :active {
            background-color: black;
            color: white;
          }
`;
export const LinkNav = styled(Link)`
           background-color: #d64078;
            color: white;
            border-radius: 0.3em;
            padding: 0.2em 0;
            position: relative;
            margin: 0 1.5em;
            width: 10em;
            display: inline-block;
            text-decoration: none;
            border: solid #b03060 1px;
            border-bottom: solid #b03060 4px;
            text-shadow: 0px 2px 0 #b03060;
            -webkit-transition: all 0.1s ease-out; /* Safari 3.2+, Chrome */
            -moz-transition: all 0.1s ease-out; /* Firefox 4-15 */
            -o-transition: all 0.1s ease-out; /* Opera 10.5â12.00 */
            transition: all 0.1s ease-out; /* Firefox 16+, Opera 12.50+ */
          :link {
            color: white;
            text-decoration: none;
          }

          :visited {
            color: #d64078;
          }

          :hover {
            background-color: #c63b6f;
          }

          :active {
            border-bottom: solid #b03060 1px;
            top: 4px;
            -webkit-transition: all 0 ease-out; /* Safari 3.2+, Chrome */
            -moz-transition: all 0 ease-out; /* Firefox 4-15 */
            -o-transition: all 0 ease-out; /* Opera 10.5â12.00 */
            transition: all 0 ease-out; /* Firefox 16+, Opera 12.50+ */
          }
          :before {
            height: 5px;
            width: 100%;
            background: white;
            position: absolute;
            content: '';
            top: -6px;
            left: 0;
          }
`;
export const LinkPrev = LinkToc.extend`
 margin-left: 2em;
 margin-right:2em;
 width: 10em;
`;
export const LinkNext = LinkPrev;

const StartLabel = styled.span`
 position: absolute;
  color: #414142;
  line-height: 1em;
  top: 0;
  left: 0;

  background-color:${props => props.color};
`;
const EndLabel = styled.span`
 position: absolute;
  color: #414142;
  line-height: 1em;
  background-color:${props => props.color};
  right: 0;
  bottom: 0;

`;
export default class Elem extends Component<Props> {
  render() {
    let idstr, cls_str;
    let borderColor='#6AC5AC';
    if (this.props.green) {
      borderColor = '#96C02E';
    }
    else if (this.props.orange) {
      borderColor = '#FDC72F';
    }
    else if (this.props.red) {
      borderColor = '#D64078';
    }
    ////////////
    if (this.props.id) {
      idstr = `id="${this.props.id}"`;
    }
    //
    if (this.props.className) {
      cls_str = `class="${this.props.className}"`;
    }
    //
    let ComStr = 'div';
    if (this.props.article) {
      ComStr = 'article';
    }
    else if (this.props.nav) {
      ComStr = 'nav';
    }
    else if (this.props.footer) {
      ComStr = 'footer';
    }
    else if (this.props.section) {
      ComStr = 'section';
    }
    let Element = styled(ComStr)`
      border: solid ${borderColor} 3px;
      position: relative;
    `;
    return (
      <Element
        id={this.props.id}
        style={this.props.style}
        className={this.props.className}
      >
        <StartLabel color={borderColor}>
          &lt;{ComStr} {idstr} {cls_str}&gt;
        </StartLabel>
        {this.props.children}
        <EndLabel  color={borderColor}>&lt;/{ComStr}&gt;</EndLabel>
      </Element>
    );
  }
}
