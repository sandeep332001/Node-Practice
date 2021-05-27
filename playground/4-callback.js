// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       lat: 0,
//       long: 0,
//     };

//     callback(data);
//   }, [2000]);
// };

// geocode("India", (data) => {
//   console.log(data);
// });

const add = (left, right, callback) => {
  setTimeout(() => {
    callback(left + right);
  }, [2000]);
};

add(2, 4, (sum) => {
  console.log(sum);
});
