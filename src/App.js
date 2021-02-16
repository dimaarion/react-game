import React, { Component } from "react";
import Sketch from "react-p5";
import Road from "./road/Road";
import Earth from "./road/Earth";
export default class App extends Component {
  images = (p5) => {
    return function preload() {
      return p5.loadImage("./dd.jpg");
    };
  };
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef,
      Earth(p5)
    );
    p5.frameRate(this.fr);
    // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };

  draw = (p5) => {
    Road(p5);
  };

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}
