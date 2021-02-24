import scena from "../db/scena.json";
import image from "../db/image.json";
import Home from "../barrier/Home";
import Pits from "../barrier/Pits";
import ErathMap from "../road/ErathMap";
import Colige from "../Colige";
export default function Kolobok(p5, props) {
  let goLeft;
  let pits;
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
  letimgArrDirect = ["noImage", props.imgKolobokFasInvert, props.imgKolobokFas];
  let speed = 40;
  let countJamp = 0;

  scena.layers
    .filter((x) => x.type === "objectgroup")
    .map((x2, i) => {
      if (x2.name === "kolobok") {
        pits = Colige(p5).collideRectRect(
          props.pitsParams.x,
          props.pitsParams.y,
          props.pitsParams.width,
          props.pitsParams.height,
          x2.objects[i].x,
          x2.objects[i].y,
          x2.objects[i].width,
          x2.objects[i].height
        );
        goLeft = Colige(p5).collideRectRect(
          props.homeParms.x,
          props.homeParms.y,
          props.homeParms.width,
          props.homeParms.height,
          x2.objects[i].x,
          x2.objects[i].y,
          x2.objects[i].width,
          x2.objects[i].height
        );
        ErathMap(p5, {
          imgErath: props.imgErath,
          presed: props.presed,
          pits: pits
        });
        Home(p5, {
          params: props.homeParms,
          presed: props.presed,
          pits: pits
        });
        Pits(p5, {
          params: props.pitsParams,
          presed: props.presed,
          pits: pits,
          goLeft: goLeft
        });

        if (x2.objects[i].y < props.kolobokY) {
          props.presed = 0;
        }
        if (props.presed === 2) {
          presedTop = 0;
          image.imgAnimation.start += 1;
          if (image.imgAnimation.start === imgArr.length) {
            image.imgAnimation.start = 0;
          }
          p5.frameRate(image.imgAnimation.speed);
          if (pits) {
            p5.image(
              props.imgKolobokJamp,
              x2.objects[i].x,
              x2.objects[i].y,
              x2.objects[i].width,
              x2.objects[i].height
            );
          } else {
            p5.image(
              imgArr[image.imgAnimation.start],
              (x2.objects[i].x += speed),
              x2.objects[i].y,
              x2.objects[i].width,
              x2.objects[i].height
            );
          }
        }
        if (props.presed === 1) {
          presedTop = 0;
          image.imgAnimation.start += 1;
          if (image.imgAnimation.start === imgArrInvert.length) {
            image.imgAnimation.start = 0;
          }
          p5.frameRate(image.imgAnimation.speed);
          if (goLeft) {
            p5.image(
              imgArrInvert[image.imgAnimation.start],
              x2.objects[i].x,
              x2.objects[i].y,
              x2.objects[i].width,
              x2.objects[i].height
            );
          } else {
            p5.image(
              imgArrInvert[image.imgAnimation.start],
              (x2.objects[i].x -= speed),
              x2.objects[i].y,
              x2.objects[i].width,
              x2.objects[i].height
            );
          }
        }

        if (props.presed === 0 && props.presedTop !== 3) {
          p5.image(
            letimgArrDirect[props.direction],
            x2.objects[i].x,
            x2.objects[i].y,
            x2.objects[i].width,
            x2.objects[i].height
          );
        }
        //
        if (props.presedTop === 3) {
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
              p5.image(
                props.imgKolobokJamp,
                (x2.objects[i].x += speed),
                (x2.objects[i].y -= speed),
                x2.objects[i].width,
                x2.objects[i].height
              );
            }
            if (countJamp === 1 && props.presed < 1) {
              p5.image(
                props.imgKolobokJamp,
                (x2.objects[i].x += speed),
                x2.objects[i].y,
                x2.objects[i].width,
                x2.objects[i].height
              );
            }
            if (countJamp === 1.5 && props.presed < 1) {
              p5.image(
                props.imgKolobokJamp,
                (x2.objects[i].x += speed),
                (x2.objects[i].y += speed),
                x2.objects[i].width,
                x2.objects[i].height
              );
            }
            if (countJamp === 2 && props.presed < 1) {
              p5.image(
                props.imgKolobokFas,
                x2.objects[i].x,
                (x2.objects[i].y = props.kolobokY),
                x2.objects[i].width,
                x2.objects[i].height
              );
            }
          } else {
            if (countJamp === 0 && props.presed < 1) {
              p5.image(
                props.imgKolobokJampInvert,
                (x2.objects[i].x -= speed),
                (x2.objects[i].y -= speed),
                x2.objects[i].width,
                x2.objects[i].height
              );
            }
            if (countJamp === 1 && props.presed < 1) {
              p5.image(
                props.imgKolobokJampInvert,
                (x2.objects[i].x -= speed),
                x2.objects[i].y,
                x2.objects[i].width,
                x2.objects[i].height
              );
            }
            if (countJamp === 1.5 && props.presed < 1) {
              p5.image(
                props.imgKolobokJampInvert,
                (x2.objects[i].x -= speed),
                (x2.objects[i].y += speed),
                x2.objects[i].width,
                x2.objects[i].height
              );
            }
            if (countJamp === 2 && props.presed < 1) {
              p5.image(
                props.imgKolobokFasInvert,
                x2.objects[i].x,
                (x2.objects[i].y = props.kolobokY),
                x2.objects[i].width,
                x2.objects[i].height
              );
            }
          }
        }
        //
      }
    });
}
