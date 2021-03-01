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
          if (d === 433) {
            p5.image(
              props.img1,
              col * scena.tilewidth + image.imgMaps.start,
              row * scena.tileheight,
              scena.tilewidth,
              scena.tileheight
            );
          }
          if (d === 434) {
            p5.image(
              props.img2,
              col * scena.tilewidth + image.imgMaps.start,
              row * scena.tileheight,
              scena.tilewidth,
              scena.tileheight
            );
          }
          if (d === 435) {
            p5.image(
              props.img3,
              col * scena.tilewidth + image.imgMaps.start,
              row * scena.tileheight,
              scena.tilewidth,
              scena.tileheight
            );
          }
          if (d === 447) {
            p5.image(
              props.img8,
              col * scena.tilewidth + image.imgMaps.start,
              row * scena.tileheight,
              scena.tilewidth,
              scena.tileheight
            );
          }
          if (d === 436) {
            p5.image(
              props.img4,
              col * scena.tilewidth + image.imgMaps.start,
              row * scena.tileheight,
              scena.tilewidth,
              scena.tileheight
            );
          }
          if (d === 437) {
            p5.image(
              props.img5,
              col * scena.tilewidth + image.imgMaps.start,
              row * scena.tileheight,
              scena.tilewidth,
              scena.tileheight
            );
          }
          if (d === 445) {
            p5.image(
              props.img6,
              col * scena.tilewidth + image.imgMaps.start,
              row * scena.tileheight,
              scena.tilewidth,
              scena.tileheight
            );
          }
          if (d === 445) {
            p5.image(
              props.img7,
              col * scena.tilewidth + image.imgMaps.start,
              row * scena.tileheight,
              scena.tilewidth,
              scena.tileheight
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
