import scena from "../db/scena.json";
import image from "../db/image.json";
import Colige from "../Colige";
export default function Home(p5, props) {
  let hit;
  scena.layers
    .filter((x) => x.type === "objectgroup")
    .map((x2, i) => {
      if (x2.name === "Home") {
        hit = p5.collideRectRect(
          200,
          200,
          100,
          150,
          p5.mouseX,
          p5.mouseY,
          50,
          75
        );
        if (hit) {
          p5.fill(0);
        } else {
          p5.fill(255);
        }
        p5.rect(200, 200, 100, 150);
      }
    });
}
