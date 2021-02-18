import road from "../db/road.json";
export default function Earth(p5, x, y, width, height, xs, ys, xh, yh) {
  return p5.loadImage(road.earth.img, (img) => {
    p5.image(img, 0, 0, 50, 50, 0, 0, 50, 50);
  });
}
