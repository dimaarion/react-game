import image from "../db/image.json";
import scena from "../db/scena.json";
import Barrier from "../barrier/Barrier";
export default function Earth(p5, props) {
  let stop = false;
  let stopMax = false;
  let widthMap = scena.tilewidth * scena.width;
  if (props.presed === 2) {
    image.imgMaps.start -= image.imgMaps.speed;
  }
  if (props.presed === 1) {
    image.imgMaps.start += image.imgMaps.speed;
  }
  if (image.imgMaps.start > 0) {
    stop = true;
    image.imgMaps.start = 0;
  }

  if (image.imgMaps.start < -scena.tilewidth * scena.width + p5.windowWidth) {
    stopMax = true;
    image.imgMaps.start = -scena.tilewidth * scena.width + p5.windowWidth;
  }
}
