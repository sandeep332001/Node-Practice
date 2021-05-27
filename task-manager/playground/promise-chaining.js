require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findOneAndUpdate("608cb67cccda0819d3412a56", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updataAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updataAgeAndCount("608cb67cccda0819d3412a56", 2)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
