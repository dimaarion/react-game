export default function Kolobok(props) {
  return (
    props.p5.image(props.imgKolobok, 100, 100, 100, 100),
    props.scena.layers.map((x) => {
      console.log(x.objects);

      //x.map((o) => {});
    })
  );
}
