import React, { Component } from "react";
import Sketch from "react-p5";
import Road from "./road/Road";
import test from "./db/test.json";
export default class App extends Component {
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(test.width * 100, test.height * 100).parent(
      canvasParentRef,
      Road(p5)
    );
    p5.frameRate(this.fr);
    // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };

  draw = (p5) => {};

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}
