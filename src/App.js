import React from "react";
import Sketch from "react-p5";
import kolobok from "./kolobok/Kolobok";
import scena from "./db/scena.json";
import image from "./db/image.json";
import Monster from "./monster/Monster";
import Barrier from "./barrier/Barrier";
import ErathMap from "./road/ErathMap";
import Ej from "./monster/Ej";
import { params, arrayVozv } from "./action";
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
    img1,
    img2,
    img3,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    block,
    img11,
    imgEj;
  let presed = 0;
  let presedTop = 0;
  let spedKadr = 0;
  let direction = 2;

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
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/XLYs-bakgraund.png"
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

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth - 25, p5.windowHeight - 25).parent(
      canvasParentRef
    );

    scena.layers
      .filter((x) => x.name === "block")
      .map((x2) => (block = x2.objects));
    scena.layers
      .filter((x) => x.name === "Home")
      .map((x2) => (homeParms = x2.objects));
    Monster(p5, {
      imgEj: imgEj,
      scena: scena,
      block: block,
      presed: presed
    });
  };
  let stop = false;
  let stopMax = false;
  const draw = (p5) => {
    if (presed === 2) {
      params.maps.start -= params.maps.speed;
    }
    if (presed === 1) {
      params.maps.start += params.maps.speed;
    }
    if (params.maps.start > 0) {
      stop = true;
      params.maps.start = 0;
    }

    if (params.maps.start < -scena.tilewidth * scena.width + p5.windowWidth) {
      stopMax = true;
      params.maps.start = -scena.tilewidth * scena.width + p5.windowWidth;
    }

    ErathMap(p5, {
      scena: scena,
      imgErath: imgErath,
      img1: img1,
      img2: img2,
      img3: img3,
      img5: img5,
      img6: img6,
      img7: img7,
      img8: img8,
      img9: img9,
      img10: img10,
      img11: img11
    });
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
      block: block,
      imgEj: imgEj
    });
    Monster(p5, {
      imgEj: imgEj,
      scena: scena,
      block: block,
      presed: presed,
      stop: stop,
      stopMax: stopMax,
      start: params.maps.start
    });
    Barrier(p5, {
      scena: scena,
      stop: stop,
      stopMax: stopMax,
      presed: presed,
      block: block,
      start: params.maps.start
    });
    Ej(p5, {
      imgEj: imgEj,
      scena: scena,
      start: params.maps.start
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
