import scena from "../db/scena.json";
import image from "../db/image.json";
import Earth from "../road/Earth";
import Lives from "../settings/Lives";
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
        props.homeParms.map(
          (hom) =>
            (home = Colige(p5).collideRectRect(
              hom.x,
              hom.y,
              hom.width,
              hom.height,
              x2.objects[i].x,
              x2.objects[i].y,
              x2.objects[i].width,
              x2.objects[i].height
            ))
        );
        props.block.map((block, j) => {
          if (block.type === "zemla") {
            if (block.name === "niz") {
              niz = Colige(p5).collideRectRect(
                block.x,
                block.y,
                block.width,
                block.height,
                x2.objects[i].x,
                x2.objects[i].y,
                x2.objects[i].width,
                x2.objects[i].height
              );
              nizY = block.y - block.height;
            }
            if (block.name === "vozv") {
              barrier = Colige(p5).collideRectRect(
                block.x,
                block.y,
                block.width,
                block.height,
                x2.objects[i].x,
                x2.objects[i].y,
                x2.objects[i].width,
                x2.objects[i].height
              );
              if (barrier) {
                barierArr = [barrier];
                barierY = [block.y - x2.objects[i].height];
              }
            }
          }
        });

        if (niz) {
          y = x2.objects[i].y = nizY;
        } else {
          y = x2.objects[i].y += speed;
        }

        if (barierArr.length > 0) {
          y = x2.objects[i].y = barierY[0];
        }
        if (props.presed === 2) {
          image.imgAnimation.start += 1;
          if (image.imgAnimation.start === imgArr.length) {
            image.imgAnimation.start = 0;
          }
          p5.frameRate(image.imgAnimation.speed);
          img = imgArr[image.imgAnimation.start];
          x = x2.objects[i].x += speed;
        }

        if (props.presed === 1) {
          image.imgAnimation.start += 1;
          if (image.imgAnimation.start === imgArrInvert.length) {
            image.imgAnimation.start = 0;
          }
          p5.frameRate(image.imgAnimation.speed);
          img = imgArrInvert[image.imgAnimation.start];
          if (home) {
            x2.objects[i].x = 0;
          } else {
            x = x2.objects[i].x -= speed;
          }

          y = x2.objects[i].y;
        }

        if (props.presed === 0) {
          img = imgArrDirect[props.direction];
          x = x2.objects[i].x;
          y = x2.objects[i].y;
        }

        if (props.presedTop === 3) {
          image.imgAnimation.startJamp += 1;
          if (props.direction === 2) {
            img = props.imgKolobokJamp;
            if (image.imgAnimation.startJamp < image.imgAnimation.jampMax) {
              x = x2.objects[i].x += sppedJamp;
              y = x2.objects[i].y -= sppedJamp;
            } else {
              x = x2.objects[i].x;
              y = x2.objects[i].y;
            }
          } else {
            img = props.imgKolobokJampInvert;
            if (image.imgAnimation.startJamp < image.imgAnimation.jampMax) {
              if (home) {
                x = x2.objects[i].x;
                y = x2.objects[i].y;
              } else {
                x = x2.objects[i].x -= sppedJamp;
                y = x2.objects[i].y -= sppedJamp;
              }
            } else {
              x = x2.objects[i].x;
              y = x2.objects[i].y;
            }
          }
        }

        w = x2.objects[i].width;
        h = x2.objects[i].height;
        //
      }
    });
  let kolobok = { x: x, y: y, w: w, h: h };
  Earth(p5, {
    block: props.block,
    presedTop: props.presedTop,
    direction: props.direction,
    presed: props.presed,
    kolobok: kolobok
  });
  ErathMap(p5, {
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
