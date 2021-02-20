import scena from "../db/scena.json";
export default function EarthMap(props) {
  let col = 0;
  let row = 0;
  scena.layers.map((layer) => {
    //Перенести в функцию
    if (layer.type === "tilelayer") {
      layer.data.map((d, i) => {
        if (d > 0) {
          /* if (d === 1) {
            props.p5.image(
              props.imgErath,
              col * scena.tilewidth,
              row * scena.tileheight,
              1024,
              900
            );
          }*/
          if (d === 113) {
            props.p5.image(
              props.imgGrass,
              col * scena.tilewidth,
              row * scena.tileheight,
              500,
              250
            );
          }
          /* if (d === 1) {
            props.p5.image(
              props.imgGrass,
              col * scena.tilewidth,
              row * scena.tileheight,
              scena.tilewidth,
              scena.tileheight
            );
          }*/
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
