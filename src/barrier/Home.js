import scena from "../db/scena.json";
import image from "../db/image.json";
import Colige from "../Colige";
export default function Home(p5, props) {
  if (props.presed === 2) {
    props.params.x -= image.imgMaps.speed;
  }
  if (props.presed === 1) {
    props.params.x += image.imgMaps.speed;
    if (props.params.x > 0) {
      props.params.x = 0;
      image.barier.map((b) =>
        b.name === "puddle" ? (props.pitsParams.x = b.x) : ""
      );
    }
  }
}
