const add = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      return reject("Number cannot be non-positive");
    }
    resolve(a + b);
  });
};

const dowork = async () => {
  const sum = await add(1, 3);
  const sum1 = await add(sum, -3);
  const sum2 = await add(sum1, 4);
  return sum2;
};

dowork()
  .then((result) => {
    console.log("result", result);
  })
  .catch((e) => {
    console.log("e", e);
  });
