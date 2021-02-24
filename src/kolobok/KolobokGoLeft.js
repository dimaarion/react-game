import scena from "../db/scena.json";
import image from "../db/image.json";
export default function KolobokGoLeft(p5, imgArrInvert, x2, speed) {
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
