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
    }
  }
  p5.fill(70);
  p5.rect(props.params.x, 500, 100, 100);
}
