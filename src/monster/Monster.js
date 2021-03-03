import Ej from "../monster/Ej";
import { params } from "../action";
export default function Monster(p5, props) {
  props.scena.layers
    .filter((x2) => x2.name === "monster")
    .map((m2) =>
      m2.objects.map((em2) => {
        if (em2.type === "ej") {
          if (em2.name === "goMonster") {
            let x;
            //

            x = em2.x + props.start;

            p5.fill(0);
            p5.rect(x, em2.y, em2.width, em2.height);
            //

            //

            //
          }
        }
      })
    );
  //
}
