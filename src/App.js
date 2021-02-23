import React from "react";
import Sketch from "react-p5";
import kolobok from "./kolobok/Kolobok";
import scena from "./db/scena.json";
import ErathMap from "./road/ErathMap";
import { kolobokGoRight } from "./action";
export default function App() {
  let imgErath,
    imgKolobokFas,
    imgKolobokLeft,
    imgKolobokRight,
    imgKolobokFasInvert,
    imgKolobokLeftInvert,
    imgKolobokJamp,
    imgKolobokRightInvert;

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
    imgKolobokRight = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/btaw-kolobokRight.png"
    );
    imgKolobokFasInvert = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/j5cI-kolobokFasInvert.png"
    );
    imgKolobokLeftInvert = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/ElC3-kolobokLeftInvert.png"
    );
    imgKolobokRightInvert = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/uxeZ-kolobokRightInvert.png"
    );
    imgKolobokJamp = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/ZAhk-koloborJamp.png"
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
    // kolobok(p5, propsStart);
  };
  let speed = 0;
  let presed = 0;
  let presedTop = 0;
  let spedKadr = 0;
  const draw = (p5) => {
    ErathMap(p5, { imgErath: imgErath });
    kolobok(p5, {
      imgKolobokFas: imgKolobokFas,
      imgKolobokLeft: imgKolobokLeft,
      imgKolobokRight: imgKolobokRight,
      imgKolobokFasInvert: imgKolobokFasInvert,
      imgKolobokLeftInvert: imgKolobokLeftInvert,
      imgKolobokRightInvert: imgKolobokRightInvert,
      imgKolobokJamp: imgKolobokJamp,
      presed: presed,
      presedTop: presedTop,
      spedKadr: spedKadr
    });
  };
  const keyPressed = (p5) => {
    if (p5.keyCode === p5.LEFT_ARROW) {
      presed = 1;
    } else if (p5.keyCode === p5.RIGHT_ARROW) {
      presed = 2;
    }
    if (p5.keyCode === 38) {
      presedTop = 3;
    }
  };
  const keyReleased = (p5) => {
    if (p5.keyCode === p5.LEFT_ARROW) {
      presed = 0;
    } else if (p5.keyCode === p5.RIGHT_ARROW) {
      presed = 0;
    }
    if (p5.keyCode === 38) {
      presedTop = 0;
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
