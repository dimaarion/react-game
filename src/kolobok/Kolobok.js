export default function Kolobok(props) {
  props.scena.layers
    .filter((x) => x.type === "objectgroup")
    .map((x2, i) => {
      if (x2.objects[i].type === "users") {
        props.p5.image(
          props.imgKolobok,
          x2.objects[i].x,
          x2.objects[i].y,
          x2.objects[i].width,
          x2.objects[i].height
        );
        console.log(x2.objects[i]);
      }
    });
}
