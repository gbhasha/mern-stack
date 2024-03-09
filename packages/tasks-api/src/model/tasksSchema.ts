import mongoose, { Schema, Model }  from "mongoose";
import {ITask} from  "./interfaces/ITask"

const tasksSchema: Schema<ITask> = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
  },
  { timestamps: true }
);

const Tasks: Model<ITask> = mongoose.model<ITask>("Tasks", tasksSchema);

export default Tasks 