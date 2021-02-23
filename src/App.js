import React from "react";
import Sketch from "react-p5";
import kolobok from "./kolobok/Kolobok";
import scena from "./db/scena.json";
import ErathMap from "./road/ErathMap";
import { kolobokGoRight } from "./action";
export default function App() {
  let imgErath, imgKolobokFas, imgKolobokLeft;

  const preload = (p5) => {
    imgErath = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/gBkC-scena.png"
    );
    imgKolobokFas = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/4mNG-kolobokFas.png"
    );
    imgKolobokLeft = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/Bjz--kolobokLeft.png"
    );
  };
  const props = {
    scena: scena,
    imgErath: imgErath,
    imgKolobokFas: imgKolobokFas,
    presed: 0
  };
  const setup = (p5, canvasParentRef) => {
    const propsStart = {
      p5: p5,
      scena: scena,
      imgErath: imgErath,
      imgKolobokFas: imgKolobokFas,
      imgKolobokLeft: imgKolobokLeft
    };
    p5.createCanvas(p5.windowWidth, scena.height * scena.tileheight).parent(
      canvasParentRef
    );

    ErathMap(p5, propsStart);
    kolobok(p5, propsStart);
  };
  let speed = 0;
  let presed = 0;
  let spedKadr = 0;
  const draw = (p5) => {
    ErathMap(p5, { imgErath: imgErath });
    kolobok(p5, {
      imgKolobokFas: imgKolobokFas,
      presed: presed,
      spedKadr: spedKadr
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
