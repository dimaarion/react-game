import React from "react";
import Sketch from "react-p5";
import Road from "./road/Road";
import scena from "./db/scena.json";
import ErathMap from "./road/ErathMap";
import { newArrayDrav } from "./action";
export default function App() {
  let imgErath;
  let imgGrass;
  const preload = (p5) => {
    imgErath = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/JoC_-scena.png"
    );
    imgGrass = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/WgVk-kolobok.png"
    );
  };
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(
      scena.width * scena.tilewidth,
      scena.height * scena.tileheight
    ).parent(canvasParentRef);
    ErathMap({ p5: p5, imgErath: imgErath, imgGrass: imgGrass });
    console.log(newArrayDrav(scena.tilesets));
  };

  const draw = (p5) => {};

  return <Sketch setup={setup} draw={draw} preload={preload} />;
}
