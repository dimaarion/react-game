import React from "react";
import Sketch from "react-p5";
import Road from "./road/Road";
import scena from "./db/scena.json";
import ErathMap from "./road/ErathMap";
export default function App() {
  let img;
  const preload = (p5) => {
    img = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/YKz9-earth.png"
    );
  };
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(100 * 50, 10 * 50).parent(canvasParentRef);
    //Road(p5);
    p5.image(img, 0, 0, 50, 50, 0, 0, 50, 50);
    p5.image(img, 50, 0, 50, 50, 50, 0, 50, 50);
    p5.image(img, 100, 0, 50, 50, 100, 0, 50, 50);
    p5.image(img, 0, 50, 50, 50, 0, 50, 50, 50);
    ErathMap(p5, img);
  };

  const draw = (p5) => {};

  return <Sketch setup={setup} draw={draw} preload={preload} />;
}
