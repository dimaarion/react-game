import scena from "../db/scena.json";
export default function EarthMap(p5, props) {
  let col = 0;
  let row = 0;
  scena.layers.map((layer) => {
    //Перенести в функцию
    if (layer.type === "tilelayer") {
      layer.data.map((d, i) => {
        if (d > 0) {
          if (d === 1) {
            p5.image(
              props.imgErath,
              col * scena.tilewidth,
              row * scena.tileheight,
              2024,
              900
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
