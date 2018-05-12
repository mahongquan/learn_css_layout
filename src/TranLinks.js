import React, { Component } from 'react';
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
          <a href="http://learnlayout.com">english</a>
        </span>
        <span>
          <a href="http://es.learnlayout.com">español</a>
        </span>
        <span>
          <a href="http://fr.learnlayout.com">français</a>
        </span>
        <span>
          <a href="http://de.learnlayout.com">deutsch</a>
        </span>
        <span>
          <a href="http://nl.learnlayout.com">dutch</a>
        </span>
        <span>
          <a href="http://it.learnlayout.com">italiano</a>
        </span>
        <span>
          <a href="http://ru.learnlayout.com">русский</a>
        </span>
        <span>
          <a href="http://fa.learnlayout.com">فارسی</a>
        </span>
        <span>
          <a href="http://ar.learnlayout.com">عربى</a>
        </span>
        <span>
          <a href="http://zh.learnlayout.com">中文</a>
        </span>
        <span>
          <a href="http://zh-tw.learnlayout.com">正體中文</a>
        </span>
        <span>
          <a href="http://ko.learnlayout.com">한국어</a>
        </span>
        <span>
          <a href="http://ja.learnlayout.com">日本語</a>
        </span>
        <span>
          <a href="http://pt-br.learnlayout.com">português(brasil)</a>
        </span>
        <span>
          <a href="http://pt-pt.learnlayout.com">português(português)</a>
        </span>
      </div>
    );
  }
}
