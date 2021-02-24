import scena from "../db/scena.json";
import image from "../db/image.json";
import Colige from "../Colige";
export default function Home(p5, props) {
  let hit;

  hit = Colige(p5).collideRectRect(
    100,
    100,
    200,
    200,
    p5.mouseX,
    p5.mouseY,
    100,
    100
  );

  if (hit) {
    return true;
  } else {
    return false;
  }
}
