import { arrayCount } from "../action";
import settings from "../db/settings.json";
import Colige from "../Colige";
export default function Lives(p5, props) {
  arrLive = [
    0,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0
  ];
  function liv(p5, arr, c) {
    let x = p5.windowWidth - c;
    let y = 10;
    let w = 10;
    let h = 10;
    let col = 0;
    let row = 0;
    p5.fill("red");
    p5.noStroke();
    arr.map((n) => {
      if (n > 0) {
        if (n === 1) {
          p5.rect(x + col * w, y * row + 5, w, h);
        }
      }
      col++;
      if (col > 8) {
        col = 0;
        row++;
      }
    });
  }
  let live = Colige().collideRectRect(
    props.x,
    props.y,
    props.w,
    props.h,
    props.x2,
    props.y2,
    props.w2,
    props.h2
  );
  let arrLives = [];
  if (live === true) {
    props.y = 0;
  } else {
  }
  p5.fill(20);
  p5.rect(props.x, props.y, props.w, props.h);
  arrLives.map((l) => liv(p5, arrLive, 110 * l));
}
