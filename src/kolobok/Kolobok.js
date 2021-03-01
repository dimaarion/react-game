import scena from "../db/scena.json";
import image from "../db/image.json";
import Home from "../barrier/Home";
import Pits from "../barrier/Pits";
import Lives from "../settings/Lives";
import ErathMap from "../road/ErathMap";
import Colige from "../Colige";
import settings from "../db/settings.json";
export default function Kolobok(p5, props) {
  let goLeft;
  let pits;
  let levx = 0;
  let levY = 0;
  let barrier;
  let niz = false;
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
  let countJamp = 0;
  let img = props.imgKolobokFas;
  let x = 0;
  let y = 0;
  let w = 0;
  let h = 0;
  scena.layers
    .filter((x) => x.type === "objectgroup")
    .map((x2, i) => {
      if (x2.name === "kolobok") {
        pits = true;
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
                x = x2.objects[i].x = block.x - block.width;
              }
            }
          }
        });
        ErathMap(p5, {
          imgErath: props.imgErath,
          presed: props.presed,
          presedTop: props.presedTop,
          direction: props.direction,
          pits: pits,
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
        Home(p5, {
          params: props.homeParms,
          pitsParams: props.pitsParams,
          presed: props.presed,
          pits: pits,
          goLeft: goLeft
        });
        if (niz) {
          y = x2.objects[i].y -= 0;
        } else {
          y = x2.objects[i].y += 4;
        }
        if (props.presed === 2) {
          console.log(barrier);

          image.imgAnimation.start += 1;
          if (image.imgAnimation.start === imgArr.length) {
            image.imgAnimation.start = 0;
          }
          p5.frameRate(image.imgAnimation.speed);
          /* barrier
            .filter((f) => f !== undefined)
            .map((barier) => {
              if (barier === true) {
                img = imgArr[image.imgAnimation.start];
                //x = x2.objects[i].x = -10;
                y = x2.objects[i].y;
                w = x2.objects[i].width;
                h = x2.objects[i].height;
              } else {
                
            });*/
          img = imgArr[image.imgAnimation.start];
          x = x2.objects[i].x += speed;
          y = x2.objects[i].y;
          w = x2.objects[i].width;
          h = x2.objects[i].height;
        }

        if (props.presed === 1) {
          image.imgAnimation.start += 1;
          if (image.imgAnimation.start === imgArrInvert.length) {
            image.imgAnimation.start = 0;
          }
          p5.frameRate(image.imgAnimation.speed);

          img = imgArrInvert[image.imgAnimation.start];
          x = x2.objects[i].x -= speed;
          y = x2.objects[i].y;
          w = x2.objects[i].width;
          h = x2.objects[i].height;
        }

        if (props.presed === 0) {
          img = imgArrDirect[props.direction];
          x = x2.objects[i].x;
          y = x2.objects[i].y;
          w = x2.objects[i].width;
          h = x2.objects[i].height;
        }
        if (props.presedTop === 3) {
          y = x2.objects[i].y -= sppedJamp;
        }

        //
        /*if (props.presedTop === 3) {
          image.imgAnimation.startJamp += 1;
          if (image.imgAnimation.startJamp > image.imgAnimation.jampMax) {
            countJamp = 1;
          }
          if (image.imgAnimation.startJamp > image.imgAnimation.jampMax + 2) {
            countJamp = 1.5;
          }
          if (x2.objects[i].y > props.kolobokY) {
            image.imgAnimation.startJamp =
              image.imgAnimation.jampMax + x2.objects[i].y + 1;
          }
          if (
            image.imgAnimation.startJamp >
            image.imgAnimation.jampMax + x2.objects[i].y
          ) {
            countJamp = 2;
          }
          p5.frameRate(image.imgAnimation.speed);

          if (props.direction === 2) {
            if (countJamp === 0 && props.presed < 1) {
              img = props.imgKolobokJamp;
              x = x2.objects[i].x += sppedJamp;
              y = x2.objects[i].y -= sppedJamp;
              w = x2.objects[i].width;
              h = x2.objects[i].height;
            }
            if (countJamp === 1 && props.presed < 1) {
              img = props.imgKolobokJamp;
              x = x2.objects[i].x += sppedJamp;
              y = x2.objects[i].y;
              w = x2.objects[i].width;
              h = x2.objects[i].height;
            }
            if (countJamp === 1.5 && props.presed < 1) {
              img = props.imgKolobokJamp;
              x = x2.objects[i].x += sppedJamp;
              y = x2.objects[i].y += sppedJamp;
              w = x2.objects[i].width;
              h = x2.objects[i].height;
            }
            if (countJamp === 2 && props.presed < 1) {
              img = props.imgKolobokFas;
              x = x2.objects[i].x;
              y = x2.objects[i].y = props.kolobokY;
              w = x2.objects[i].width;
              h = x2.objects[i].height;
            }
          } else {
            if (countJamp === 0 && props.presed < 1) {
              img = props.imgKolobokJampInvert;
              x = x2.objects[i].x -= sppedJamp;
              y = x2.objects[i].y -= sppedJamp;
              w = x2.objects[i].width;
              h = x2.objects[i].height;
            }
            if (countJamp === 1 && props.presed < 1) {
              img = props.imgKolobokJampInvert;
              x = x2.objects[i].x -= sppedJamp;
              y = x2.objects[i].y;
              w = x2.objects[i].width;
              h = x2.objects[i].height;
            }
            if (countJamp === 1.5 && props.presed < 1) {
              img = props.imgKolobokJampInvert;
              x = x2.objects[i].x -= sppedJamp;
              y = x2.objects[i].y += sppedJamp;
              w = x2.objects[i].width;
              h = x2.objects[i].height;
            }
            if (countJamp === 2 && props.presed < 1) {
              img = props.imgKolobokFasInvert;
              x = x2.objects[i].x;
              y = x2.objects[i].y = props.kolobokY;
              w = x2.objects[i].width;
              h = x2.objects[i].height;
            }
          }
        }*/

        //
      }
    });

  p5.image(img, x, y, w, h);
}
