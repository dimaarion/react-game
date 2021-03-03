export const arrayCount = (count) => {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr[i] = i;
  }
  return arr;
};

export const newArrayDrav = (arr, params) => {
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    a[i] = {
      firstgid: arr[i].firstgid,
      source: arr[i].source.split("/")[4].replace("tsx", "png")
    };
  }
  return a;
};

export const params = {
  kolobok: {
    speed: 5
  },
  monster: {
    speed: 8
  },
  maps: {
    speed: 2,
    start: 0
  }
};

export const arrayVozv = (scena) => {
  let arr = [{}];
  scena.layers
    .filter((x) => x.name === "block")
    .map((x2) =>
      x2.objects.map((x3, i) => {
        if (x3.name === "vozv") {
          arr[i - 1] = { x: x3.x, y: x3.y, w: x3.width, h: x3.height };
        }
      })
    );
  return arr;
};

export const arrCollizion = (p) => {};
