import scena from "../db/scena.json";
import image from "../db/image.json";
import { params } from "../action";

export default function EarthMap(p5, props) {
  let col = 0;
  let row = 0;

  p5.background(255);
  props.scena.layers.map((layer) => {
    if (layer.type === "tilelayer") {
      layer.data.map((d, i) => {
        if (d > 0) {
          if (d === 101) {
            p5.image(
              props.img1,
              col * props.scena.tilewidth + params.maps.start,
              row * props.scena.tileheight,
              1251,
              800
            );
          }
        }
        col++;
        if (col > props.scena.width - 1) {
          col = 0;
          row++;
        }
      });
    }
  });
}
