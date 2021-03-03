import scena from "../db/scena.json";
import image from "../db/image.json";
import Colige from "../Colige";
import { params, arrayVozv } from "../action";
export default function Kolobok(p5, props) {
  let home = false;
  let barrier = false;
  let barierArr = [];
  let barierY = [];
  let niz = false;
  let nizY = [];
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
  let sppedJamp = 10;
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
                nizY = [block.y - 70];
              }
            }
          });
          if (niz) {
            y = ko.y = nizY[0];
          } else {
            y = ko.y += params.kolobok.speed;
          }
          if (barierArr.length > 0) {
            y = ko.y = barierY[0];
          }
          if (props.presed === 2) {
            image.imgAnimation.start += 1;

            if (image.imgAnimation.start === imgArr.length) {
              image.imgAnimation.start = 0;
            }

            img = imgArr[image.imgAnimation.start];
            x = ko.x += params.kolobok.speed;
          }

          if (props.presed === 1) {
            image.imgAnimation.start += 1;
            if (image.imgAnimation.start === imgArrInvert.length) {
              image.imgAnimation.start = 0;
            }

            img = imgArrInvert[image.imgAnimation.start];
            if (home) {
              ko.x = 0;
            } else {
              x = ko.x -= params.kolobok.speed;
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
              if (
                image.imgAnimation.startJamp <
                image.imgAnimation.jampMax / 2
              ) {
                x = ko.x += sppedJamp;
                y = ko.y -= sppedJamp;
              } else if (
                image.imgAnimation.startJamp < image.imgAnimation.jampMax
              ) {
                x = ko.x += sppedJamp;
                y = ko.y;
              } else {
                x = ko.x;
                y = ko.y;
              }
            } else {
              img = props.imgKolobokJampInvert;
              if (
                image.imgAnimation.startJamp <
                image.imgAnimation.jampMax / 2
              ) {
                x = ko.x -= sppedJamp;
                y = ko.y -= sppedJamp;
              } else if (
                image.imgAnimation.startJamp < image.imgAnimation.jampMax
              ) {
                x = ko.x -= sppedJamp;
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

  p5.image(img, x, y, w, h);
}
