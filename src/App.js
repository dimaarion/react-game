import React from "react";
import Sketch from "react-p5";
import kolobok from "./kolobok/Kolobok";
import scena from "./db/scena.json";
import ErathMap from "./road/ErathMap";
import { newArrayDrav } from "./action";
export default function App() {
  let imgErath;
  let imgKolobok;
  const preload = (p5) => {
    imgErath = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/naYb-scena.png"
    );
    imgKolobok = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/WgVk-kolobok.png"
    );
  };
  const setup = (p5, canvasParentRef) => {
    const props = {
      p5: p5,
      scena: scena,
      imgErath: imgErath,
      imgKolobok: imgKolobok
    };
    p5.createCanvas(
      scena.width * scena.tilewidth,
      scena.height * scena.tileheight
    ).parent(canvasParentRef);

    ErathMap(props);
    kolobok(props);
  };

  const draw = (p5) => {};

  return <Sketch setup={setup} draw={draw} preload={preload} />;
}
