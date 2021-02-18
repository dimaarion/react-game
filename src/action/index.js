export const arrayCount = (count) => {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr[i] = i;
  }
  return arr;
};

export const taitlDraw = (p5, img, arr, w, h) => {
  let col = 0;
  let row = 0;
  let arrNew = [{}];
  let x = 0;
  let y = 0;
  for (let i = 0; i < arr.length; i++) {
    p5.image(img, i * w, 0, w, 50, i * w, 0, w, 50);
  }
};
