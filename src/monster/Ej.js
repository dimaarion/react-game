import { params } from "../action";
export default function Ej(p5, props) {
  //
  p5.frameRate(10);
  props.scena.layers
    .filter((x) => x.name === "monster")
    .map((m) =>
      m.objects.map((em) => {
        if (em.type === "ej") {
          if (em.name === "monster") {
            em.x += params.monster.speed;
            if (em.x < props.em2 || em.x > props.em2 + props.em2W) {
              params.monster.speed *= -1;
            }
            p5.image(props.imgEj, em.x, em.y, em.width, em.height);
          }
        }
      })
    );

  //
}
