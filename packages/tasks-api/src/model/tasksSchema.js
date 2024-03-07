const db = require("mongoose");

const tasksSchema = db.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
  },
  { timestamps: true }
);

const Tasks = db.model("Tasks", tasksSchema);
module.exports = Tasks;
