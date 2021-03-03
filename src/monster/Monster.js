import Ej from "../monster/Ej";
import { params } from "../action";
export default function Monster(p5, props) {
  let x;
  props.scena.layers
    .filter((x2) => x2.name === "monster")
    .map((m2) =>
      m2.objects.map((em2) => {
        if (em2.type === "ej") {
          if (em2.name === "goMonster") {
            //

            x = em2.x + props.start;

            p5.fill(0);
            p5.rect(x, em2.y, em2.width, em2.height);
            //
            Ej(p5, {
              imgEj: props.imgEj,
              scena: props.scena,
              em2: x,
              em2W: em2.width
            });
            //

            //
          }
        }
      })
    );
  //
}
