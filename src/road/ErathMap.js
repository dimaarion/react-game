import scena from "../db/scena.json";
import Earth from "./Earth";
export default function EarthMap(props) {
  let col = 0;
  let row = 0;
  scena.layers.map((layer) => {
    if (layer.type === "tilelayer") {
      layer.data.map((d, i) => {
        if (d > 0) {
          if (d < 11) {
            props.p5.image(
              props.imgErath,
              col * scena.tilewidth,
              row * scena.tileheight,
              scena.tilewidth,
              scena.tileheight,
              (d - 1) * scena.tilewidth,
              0,
              scena.tilewidth,
              scena.tileheight
            );
          }
          if (d > 10 && d < 21) {
            props.p5.image(
              props.imgErath,
              col * scena.tilewidth,
              row * scena.tileheight,
              scena.tilewidth,
              scena.tileheight,
              (d - 11) * scena.tilewidth,
              scena.tileheight,
              scena.tilewidth,
              scena.tileheight
            );
          }
          if (d > 20 && d < 31) {
            props.p5.image(
              props.imgGrass,
              col * scena.tilewidth,
              row * scena.tileheight,
              scena.tilewidth,
              scena.tileheight,
              (d - 21) * scena.tilewidth,
              0,
              scena.tilewidth,
              scena.tileheight
            );
          }
          props.p5.fill("red");
          props.p5.text(
            "" + d + "",
            col * scena.tilewidth,
            row * scena.tileheight
          );
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
