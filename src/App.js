import React from "react";
import Sketch from "react-p5";
import kolobok from "./kolobok/Kolobok";
import scena from "./db/scena.json";
import image from "./db/image.json";

import Home from "./barrier/Home";
import Pits from "./barrier/Pits";
import Colige from "./Colige";
import { kolobokGoRight } from "./action";
export default function App() {
  let imgErath,
    imgKolobokFas,
    imgKolobokLeft,
    imgKolobokRight,
    imgKolobokFasInvert,
    imgKolobokLeftInvert,
    imgKolobokJamp,
    imgKolobokJampInvert,
    imgKolobokRightInvert,
    kolobokY,
    homeParms,
    pitsParams;
  let test = 0;
  let c = 0;
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
    imgKolobokJampInvert = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/uWKu-koloborJampInvert.png"
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

    scena.layers
      .filter((x) => x.type === "objectgroup")
      .map((x2, i) => {
        if (x2.name === "kolobok") {
          kolobokY = x2.objects[i].y;
        }
      });

    scena.layers
      .filter((x) => x.name === "Home")
      .map((x2) =>
        x2.objects
          .filter((x3) => x3.name === "home")
          .map((x4) => {
            homeParms = {
              x: x4.x,
              y: x4.y,
              width: x4.width,
              height: x4.height
            };
          })
      );

    scena.layers
      .filter((x) => x.name === "Pits")
      .map((x2) =>
        x2.objects
          .filter((x3) => x3.name === "pits")
          .map((x4) => {
            pitsParams = {
              x: x4.x,
              y: x4.y,
              width: x4.width,
              height: x4.height
            };
            image.barier.map((b) => (b.name === "puddle" ? (b.x = x4.x) : ""));
          })
      );
  };

  let speed = 0;
  let presed = 0;
  let presedTop = 0;
  let spedKadr = 0;
  let direction = 2;

  const draw = (p5) => {
    kolobok(p5, {
      imgKolobokFas: imgKolobokFas,
      imgKolobokLeft: imgKolobokLeft,
      imgKolobokRight: imgKolobokRight,
      imgKolobokFasInvert: imgKolobokFasInvert,
      imgKolobokLeftInvert: imgKolobokLeftInvert,
      imgKolobokRightInvert: imgKolobokRightInvert,
      imgKolobokJamp: imgKolobokJamp,
      imgKolobokJampInvert: imgKolobokJampInvert,
      imgErath: imgErath,
      presed: presed,
      presedTop: presedTop,
      spedKadr: spedKadr,
      direction: direction,
      kolobokY: kolobokY,
      homeParms: homeParms,
      pitsParams: pitsParams,
      test: test,
      c: c
    });
  };
  const keyPressed = (p5) => {
    if (p5.keyCode === p5.LEFT_ARROW) {
      presed = 1;
      direction = 1;
      //presedTop = 0;
    } else if (p5.keyCode === p5.RIGHT_ARROW) {
      presed = 2;
      direction = 2;
      //presedTop = 0;
    }
    if (p5.keyCode === 38) {
      presedTop = 3;
      image.imgAnimation.startJamp = 0;
      presed = 0;
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
