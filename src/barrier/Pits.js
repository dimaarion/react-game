import scena from "../db/scena.json";
import image from "../db/image.json";
import Colige from "../Colige";
export default function Pits(p5, props) {
  if (props.presed === 2) {
    props.params.x -= image.imgMaps.speed;
  }
  if (props.presed === 1) {
    if (props.goLeft) {
      props.params.x;
      image.barier.map((b) =>
        b.name === "puddle" ? (props.params.x = b.x) : ""
      );
    } else {
      props.params.x += image.imgMaps.speed;
    }
  }

  p5.fill(0);
  p5.rect(props.params.x, 500, 100, 100);
}
