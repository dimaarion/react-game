import scena from "../db/scena.json";
import image from "../db/image.json";
import Earth from "../road/Earth";
import Monster from "../monster/Monster";
import ErathMap from "../road/ErathMap";
import Colige from "../Colige";
import settings from "../db/settings.json";
export default function Kolobok(p5, props) {
  let home = false;
  let barrier = false;
  let homParams = [];
  let barierArr = [];
  let barierY = [];
  let niz = false;
  let nizY = 0;
  let imgArr = [
    props.imgKolobokFas,
    props.imgKolobokRight,
    props.imgKolobokFas,
    props.imgKolobokLeft
  ];
  let imgArrInvert = [
    props.imgKolobokFasInvert,
    props.imgKolobokRightInvert,
    props.imgKolobokFasInvert,
    props.imgKolobokLeftInvert
  ];
  let imgArrDirect = [
    "noImage",
    props.imgKolobokFasInvert,
    props.imgKolobokFas
  ];
  let speed = 20;
  let sppedJamp = 40;
  let img = props.imgKolobokFas;
  let x = 0;
  let y = 0;
  let w = 0;
  let h = 0;
  scena.layers
    .filter((x) => x.type === "objectgroup")
    .map((x2, i) => {
      if (x2.name === "kolobok") {
        x2.objects.map((ko) => {
          // блок в начале игры
          props.homeParms.map(
            (hom) =>
              (home = Colige(p5).collideRectRect(
                hom.x,
                hom.y,
                hom.width,
                hom.height,
                ko.x,
                ko.y,
                ko.width,
                ko.height
              ))
          );
          // платформа
          props.block.map((block, j) => {
            if (block.type === "zemla") {
              if (block.name === "niz") {
                niz = Colige(p5).collideRectRect(
                  block.x,
                  block.y,
                  block.width,
                  block.height,
                  ko.x,
                  ko.y,
                  ko.width,
                  ko.height
                );
                nizY = block.y - block.height;
              }

              if (block.name === "vozv") {
                barrier = Colige(p5).collideRectRect(
                  block.x,
                  block.y,
                  block.width,
                  block.height,
                  ko.x,
                  ko.y,
                  ko.width,
                  ko.height
                );
                if (barrier) {
                  barierArr = [barrier];
                  barierY = [block.y - ko.height];
                }
              }
            }
          });
          if (niz) {
            y = ko.y = nizY;
          } else {
            y = ko.y += speed;
          }
          if (barierArr.length > 0) {
            y = ko.y = barierY[0];
          }
          if (props.presed === 2) {
            image.imgAnimation.start += 1;
            if (image.imgAnimation.start === imgArr.length) {
              image.imgAnimation.start = 0;
            }
            p5.frameRate(image.imgAnimation.speed);
            img = imgArr[image.imgAnimation.start];
            x = ko.x += speed;
          }
          if (props.presed === 1) {
            image.imgAnimation.start += 1;
            if (image.imgAnimation.start === imgArrInvert.length) {
              image.imgAnimation.start = 0;
            }
            p5.frameRate(image.imgAnimation.speed);
            img = imgArrInvert[image.imgAnimation.start];
            if (home) {
              ko.x = 0;
            } else {
              x = ko.x -= speed;
            }

            y = ko.y;
          }
          if (props.presed === 0) {
            img = imgArrDirect[props.direction];
            x = ko.x;
            y = ko.y;
          }
          if (props.presedTop === 3) {
            image.imgAnimation.startJamp += 1;
            if (props.direction === 2) {
              img = props.imgKolobokJamp;
              if (image.imgAnimation.startJamp < image.imgAnimation.jampMax) {
                x = ko.x += sppedJamp;
                y = ko.y -= sppedJamp;
              } else {
                x = ko.x;
                y = ko.y;
              }
            } else {
              img = props.imgKolobokJampInvert;
              if (image.imgAnimation.startJamp < image.imgAnimation.jampMax) {
                if (home) {
                  x = ko.x;
                  y = ko.y;
                } else {
                  x = ko.x -= sppedJamp;
                  y = ko.y -= sppedJamp;
                }
              } else {
                x = ko.x;
                y = ko.y;
              }
            }
          }
          w = ko.width;
          h = ko.height;
          //конец цикла колобок
        });
      }
    });
  let kolobok = { x: x, y: y, w: w, h: h };
  Monster(p5, {
    imgEj: props.imgEj,
    scena: scena
  });
  Earth(p5, {
    block: props.block,
    presedTop: props.presedTop,
    direction: props.direction,
    presed: props.presed,
    kolobok: kolobok
  });
  ErathMap(p5, {
    scena: scena,
    imgErath: props.imgErath,
    img1: props.img1,
    img2: props.img2,
    img3: props.img3,
    img5: props.img5,
    img6: props.img6,
    img7: props.img7,
    img8: props.img8,
    img9: props.img9,
    img10: props.img10,
    img11: props.img11
  });
  p5.image(img, x, y, w, h);
}
