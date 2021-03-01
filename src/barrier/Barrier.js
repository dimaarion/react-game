import scena from "../db/scena.json";
import image from "../db/image.json";
import Colige from "../Colige";
export default function Barrier(p5, props) {
  if (props.presed === 2) {
    if (props.stopMax) {
      props.block.map((b) => b.x);
    } else {
      props.block.map((b) => (b.x -= image.imgMaps.speed));
    }
  }

  if (props.presed === 1) {
    if (props.stop) {
      props.block.map((b) => b.x);
    } else {
      props.block.map((b) => (b.x += image.imgMaps.speed));
    }
  }
}
