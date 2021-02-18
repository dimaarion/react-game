import scena from "../db/scena.json";
import Earth from "./Earth";
export default function EarthMap(p5, img) {
  let col = 0;
  let row = 0;
  scena.layers.map((layer) => {
    if (layer.type === "tilelayer") {
      layer.data.map((d, i) => {
        if (d > 0) {
          p5.image(
            img,
            col * scena.tilewidth,
            row * scena.tileheight,
            scena.tilewidth,
            scena.tileheight,
            col * scena.tilewidth,
            row * scena.tileheight,
            scena.tilewidth,
            scena.tileheight
          );
          console.log(col + "/" + row);
          p5.fill("red");
          p5.text("" + d + "", col * scena.tilewidth, row * scena.tileheight);
          /*p5.fill("green");
          p5.rect(
            col * scena.tilewidth,
            row * scena.tileheight,
            scena.tilewidth,
            scena.tileheight
          );*/
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
