import React from "react";
import Sketch from "react-p5";
import kolobok from "./kolobok/Kolobok";
import scena from "./db/scena.json";
import ErathMap from "./road/ErathMap";
import { kolobokGoRight } from "./action";
export default function App() {
  let imgErath;
  let imgKolobok;
  const preload = (p5) => {
    imgErath = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/gBkC-scena.png"
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
      imgKolobok: imgKolobok,
      presed: 0
    };
    p5.createCanvas(
      scena.width * scena.tilewidth,
      scena.height * scena.tileheight
    ).parent(canvasParentRef);

    ErathMap(props);
    kolobok(props);
  };
  let presed = 0;
  const draw = (p5) => {
    kolobokGoRight({
      p5: p5,
      presed: presed,
      scena: scena,
      imgKolobok: imgKolobok
    });
  };
  const keyPressed = (p5) => {
    if (p5.keyCode === p5.LEFT_ARROW) {
      presed = 1;
    } else if (p5.keyCode === p5.RIGHT_ARROW) {
      presed = 2;
    }
  };
  const keyReleased = (p5) => {
    if (p5.keyCode === p5.LEFT_ARROW) {
      presed = 0;
    } else if (p5.keyCode === p5.RIGHT_ARROW) {
      presed = 0;
    }
  };
  return (
    <Sketch
      setup={setup}
      draw={draw}
      preload={preload}
      keyPressed={keyPressed}
      keyReleased={keyReleased}
    />
  );
}
