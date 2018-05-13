import React, { Component } from 'react';
import {A} from './Elem';
export default class TranLinks extends Component<Props> {
  render() {
    return (
      <div id="mytranslators">
        <style jsx="true">{`
          #mytranslators {
            text-align: center;
            max-width: 500px;
            margin: 0 auto 1em;
          }
          span {
            margin: 0 0.2em;
          }
        `}</style>
        <span>
          <A href="http://learnlayout.com">english</A>
        </span>
        <span>
          <A href="http://es.learnlayout.com">español</A>
        </span>
        <span>
          <A href="http://fr.learnlayout.com">français</A>
        </span>
        <span>
          <A href="http://de.learnlayout.com">deutsch</A>
        </span>
        <span>
          <A href="http://nl.learnlayout.com">dutch</A>
        </span>
        <span>
          <A href="http://it.learnlayout.com">italiano</A>
        </span>
        <span>
          <A href="http://ru.learnlayout.com">русский</A>
        </span>
        <span>
          <A href="http://fa.learnlayout.com">فارسی</A>
        </span>
        <span>
          <A href="http://ar.learnlayout.com">عربى</A>
        </span>
        <span>
          <A href="http://zh.learnlayout.com">中文</A>
        </span>
        <span>
          <A href="http://zh-tw.learnlayout.com">正體中文</A>
        </span>
        <span>
          <A href="http://ko.learnlayout.com">한국어</A>
        </span>
        <span>
          <A href="http://ja.learnlayout.com">日本語</A>
        </span>
        <span>
          <A href="http://pt-br.learnlayout.com">português(brasil)</A>
        </span>
        <span>
          <A href="http://pt-pt.learnlayout.com">português(português)</A>
        </span>
      </div>
    );
  }
}
