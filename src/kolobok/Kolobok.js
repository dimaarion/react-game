import scena from "../db/scena.json";
import image from "../db/image.json";
export default function Kolobok(p5, props) {
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
  let speed = 40;

  scena.layers
    .filter((x) => x.type === "objectgroup")
    .map((x2, i) => {
      if (x2.objects[i].type === "users") {
        if (props.presedTop === 3) {
          p5.frameRate(5);
          p5.image(
            props.imgKolobokJamp,
            (x2.objects[i].x += speed),
            (x2.objects[i].y -= speed),
            x2.objects[i].width,
            x2.objects[i].height
          );
        } else {
          if (props.presed === 2) {
            image.imgAnimation.start += 1;
            if (image.imgAnimation.start === imgArr.length) {
              image.imgAnimation.start = 0;
            }
            p5.frameRate(16);
            p5.image(
              imgArr[image.imgAnimation.start],
              (x2.objects[i].x += speed),
              x2.objects[i].y,
              x2.objects[i].width,
              x2.objects[i].height
            );
          }
          if (props.presed === 1) {
            image.imgAnimation.start += 1;
            if (image.imgAnimation.start === imgArrInvert.length) {
              image.imgAnimation.start = 0;
            }
            p5.frameRate(16);
            p5.image(
              imgArrInvert[image.imgAnimation.start],
              (x2.objects[i].x -= speed),
              x2.objects[i].y,
              x2.objects[i].width,
              x2.objects[i].height
            );
          }

          if (props.presed === 0) {
            p5.image(
              props.imgKolobokFas,
              x2.objects[i].x,
              x2.objects[i].y,
              x2.objects[i].width,
              x2.objects[i].height
            );
          }
        }
      }
    });
}
