import scena from "../db/scena.json";
import image from "../db/image.json";
import Colige from "../Colige";
export default function Barrier(p5, props) {
  if (props.presed === 2) {
    props.block.map((b) => (b.x -= image.imgMaps.speed));
  }
  if (props.presed === 1) {
    props.block.map((b) => (b.x += image.imgMaps.speed));
  }
}
