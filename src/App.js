import React from "react";
import Sketch from "react-p5";
import kolobok from "./kolobok/Kolobok";
import scena from "./db/scena.json";
import image from "./db/image.json";
import settings from "./db/settings.json";
import Home from "./barrier/Home";
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
    pitsParams,
    img1,
    img2,
    img3,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    presedTopUp,
    block,
    img11,
    imgEj;
  let test = 0;
  let c = 0;
  const preload = (p5) => {
    imgErath = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/gBkC-scena.png"
    );
    imgKolobokFas = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/Wt_E-kolobokFas.png"
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
    img1 = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/BGo6-1.png"
    );
    img2 = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/o65_-2.png"
    );
    img3 = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/olj2-3.png"
    );
    img11 = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/IN6M-11.png"
    );
    imgEj = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/h_se-ej.png"
    );
    /*img6 = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/LgiT-6.png"
    );
    img7 = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/cjqE-7.png"
    );
    img8 = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/9GMj-8.png"
    );
    img9 = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/lZ-V-9.png"
    );
    img10 = p5.loadImage(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/um27-10.png"
    );*/
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
    p5.createCanvas(p5.windowWidth - 25, p5.windowHeight - 25).parent(
      canvasParentRef
    );

    scena.layers
      .filter((x) => x.name === "block")
      .map((x2) => (block = x2.objects));
    scena.layers
      .filter((x) => x.name === "Home")
      .map((x2) => (homeParms = x2.objects));
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
      test: test,
      c: c,
      img1: img1,
      img2: img2,
      img3: img3,
      img5: img5,
      img6: img6,
      img7: img7,
      img8: img8,
      img9: img9,
      img10: img10,
      img11: img11,
      block: block,
      imgEj: imgEj
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

      presed = 0;
    }
  };
  const keyReleased = (p5) => {
    if (p5.keyCode === p5.LEFT_ARROW) {
      presed = 0;
    } else if (p5.keyCode === p5.RIGHT_ARROW) {
      presed = 0;
    }
    if (p5.keyCode === 38) {
      image.imgAnimation.startJamp = 0;

      presed = 0;
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
