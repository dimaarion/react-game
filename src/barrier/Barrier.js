import scena from "../db/scena.json";
import { params } from "../action";
import Colige from "../Colige";
export default function Barrier(p5, props) {
  props.scena.layers
    .filter((f) => f.name === "block")
    .map((x) =>
      x.objects.map((block) => {
        let x = 0;
        if (block.name === "vozv") {
          x = block.x + props.start;
          p5.fill("red");
          p5.rect(x, block.y, block.width, block.height);
        }
      })
    );
}
