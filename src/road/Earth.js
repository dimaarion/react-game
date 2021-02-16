import road from "../db/road.json";
import { arrayCount } from "../action";
export default function Earth(p5) {
  return p5.loadImage(road.earth.img, (img) => {
    arrayCount(road.earth.parametr.count).map((x) =>
      p5.image(
        img,
        x * road.earth.parametr.width,
        window.innerHeight - road.earth.parametr.height
      )
    );
  });
}
