export default function Earth(p5) {
  return p5.loadImage(
    "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/YKz9-earth.png",
    (img) => {
      p5.image(img, 0, 0);
    }
  );
}
