import { params, arrayVozv } from "../action";
import Colige from "../Colige";
export default function Ej(p5, props) {
  props.scena.layers
    .filter((x) => x.name === "monster")
    .map((m) =>
      m.objects.map((em) => {
        if (em.type === "ej") {
          if (em.name === "monster") {
            let blarr = [];
            arrayVozv(props.scena).map((bl, i) => {
              blarr[i] = [bl.x + props.start];
            });

            em.x += params.monster.speed;
            if (em.x < blarr[0] || em.x > blarr[1]) {
              params.monster.speed *= -1;
            }

            p5.image(props.imgEj, em.x, em.y, em.width, em.height);
          }
        }
      })
    );

  //
}
