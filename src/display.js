import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Elem,{NavWrapper,LinkNav,LinkPrev,LinkNext,LinkToc} from './Elem';
import ElemInline from './ElemInline';
export default class display extends Component<Props> {
  render() {
    return (
      <React.Fragment>
        <h1 className="content">the &quot;display&quot; property</h1>
        <p className="content">
          <code>display</code> is CSS&apos;s most important property for
          controlling layout. Every element has a default display value
          depending on what type of element it is. The default for most elements
          is usually <code>block</code> or <code>inline</code>. A block element
          is often called a block-level element. An inline element is always
          just called an inline element.
        </p>
        <h2 className="content">block</h2>
        <Elem>
          <p>
            <code>div</code> is the standard block-level element. A block-level
            element starts on a new line and stretches out to the left and right
            as far as it can. Other common block-level elements are{' '}
            <code>p</code> and <code>form</code>, and new in HTML5 are{' '}
            <code>header</code>, <code>footer</code>, <code>section</code>, and
            more.
          </p>
        </Elem>
        <div className="content">
          <h2>inline</h2>
          <p>
            <code>span</code> is the standard inline element. An inline element
            can wrap some text inside a paragraph
            <ElemInline>like this</ElemInline>
            without disrupting the flow of that paragraph. The <code>
              a
            </code>{' '}
            element is the most common inline element, since you use them for
            links.
          </p>
          <h2>none</h2>
          <p>
            Another common display value is <code>none</code>. Some specialized
            elements such as <code>script</code> use this as their default. It
            is commonly used with JavaScript to hide and show elements without
            really deleting and recreating them.
          </p>
          <p>
            This is different from <code>visibility</code>. Setting{' '}
            <code>display</code> to <code>none</code> will render the page as
            though the element does not exist. <code>visibility: hidden;</code>{' '}
            will hide the element, but the element will still take up the space
            it would if it was fully visible.
          </p>
          <style jsx="true">{`
            #idnone {
              display: none;
            }
          `}</style>
          <div id="idnone">You found me!</div>
          <h2>other display values</h2>
          <p>
            There are plenty of more exotic display values, such as{' '}
            <code>list-item</code> and <code>table</code>.{' '}
            <a href="#">Here is an exhaustive list</a>. We&apos;ll discuss{' '}
            <code>inline-block</code> and <code>flex</code> later on.
          </p>
          <h2>extra credit</h2>
          <p>
            As I mentioned, every element has a default display type. However,
            you can <em>always</em> override this! Though it wouldn&apos;t make
            sense to make an inline div, you can use this to customize the
            display of elements that have particular semantics. A common example
            is making inline <code>li</code> elements for horizontal menus.
          </p>
        </div>

      </React.Fragment>
    );
  }
}
