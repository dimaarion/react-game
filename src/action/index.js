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
  monster: {
    speed: 5
  },
  maps: {
    speed: 10,
    start: 0
  }
};
