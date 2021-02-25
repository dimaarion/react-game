import scena from "../db/scena.json";
import image from "../db/image.json";
export default function EarthMap(p5, props) {
  let col = 0;
  let row = 0;
  if (props.presed === 2) {
    image.imgMaps.start -= image.imgMaps.speed;
  }
  if (props.presed === 1) {
    image.imgMaps.start += image.imgMaps.speed;
    if (image.imgMaps.start > 0 || props.goLeft) {
      image.imgMaps.start = 0;
    }
  }
  p5.background(255);
  scena.layers.map((layer) => {
    if (layer.type === "tilelayer") {
      layer.data.map((d, i) => {
        if (d > 0) {
          if (d === 1) {
            p5.image(
              props.imgErath,
              col * scena.tilewidth + image.imgMaps.start,
              row * scena.tileheight,
              scena.tilewidth * 40,
              scena.tileheight * scena.height
            );
          }
        }
        col++;
        if (col > scena.width - 1) {
          col = 0;
          row++;
        }
      });
    }
  });
}
