require("../src/db/mongoose");
const Task = require("../src/models/task");

const deleteTaskAndCount = async (id) => {
  const deleteTask = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: true });
  return count;
};

deleteTaskAndCount("609f35c2abafe74589abc112")
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
