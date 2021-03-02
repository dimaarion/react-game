export default function Monster(p5, props) {
  props.scena.layers.map((x) => {
    if (x.name === "monster") {
      x.objects.map((m) => {
        console.log(m);
      });
    }
  });
}
