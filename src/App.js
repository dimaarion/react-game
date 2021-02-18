import React from "react";
import Sketch from "react-p5";
import Road from "./road/Road";
import scena from "./db/scena.json";
import ErathMap from "./road/ErathMap";
export default function App() {
  let imgErath;
  let imgGrass;
  const preload = (p5) => {
    imgErath = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/YKz9-earth.png"
    );
    imgGrass = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/xI3H-grass.png"
    );
  };
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(100 * 50, 10 * 50).parent(canvasParentRef);
    ErathMap({ p5: p5, imgErath: imgErath, imgGrass: imgGrass });
  };

  const draw = (p5) => {};

  return <Sketch setup={setup} draw={draw} preload={preload} />;
}
