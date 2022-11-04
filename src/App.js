/*global chrome*/
/*global document*/

import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import Readability from "./libs/Readability";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      readerView: true,
    };

    this.keyupListener = this.keyupListener.bind(this);
    this.closeReader = this.closeReader.bind(this);
  }

  componentWillMount() {
    var documentClone = document.cloneNode(true);
    var { title, content } = new Readability(documentClone).parse();

    this.setState({ title, content });
  }

  componentDidMount() {
    if (this.state.readerView) {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

      const theme = darkThemeMq.matches ? 'dark' : 'white';
      this.setState({ theme });

      darkThemeMq.addEventListener('change', ({ target }) => {
        const theme = target.matches ? 'dark' : 'white';
        this.setState({ theme });
      });

      document.addEventListener("keyup", this.keyupListener);
    }
  }

  keyupListener({ key }) {
    if (key === "Escape") { this.closeReader() }
  }

  closeReader() {
    this.setState({
      readerView: false
    });

    // remove scroll stop style from body
    const bodyElement = document.getElementsByTagName("body");
    bodyElement[0].removeAttribute("style");

    document.removeEventListener("keyup", this.keyupListener);
  }

  render() {
    const { readerView, activeTheme } = this.state;

    if (readerView) {
      return (
        <div className={`rr-app theme-${activeTheme}`}>
          <section className="rr-app-wrapper">
            <article className="rr-content__wrapper">
              <h1>{this.state.title}</h1>
              {ReactHtmlParser(this.state.content)}
            </article>
          </section>
        </div>
      );
    }

    return null;
  }
}
