import tasksSchema from "../model/tasksSchema";
import { Types } from "mongoose";
import {ITaskPayload} from "../model/interfaces/ITask"

const getAllTasks = async () => {
  try {
    const allTasks = await tasksSchema.find({});
    if (allTasks) {
      return allTasks;
    } else {
      throw new Error("No results found");
    }
  } catch (e: unknown) {
    throw e;
  }
};

const getTask = async (id: any) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID");
  }
  try {
    const tasks = await tasksSchema.findById(id);
    if (tasks) {
      return tasks;
    } else {
      throw new Error("No results found");
    }
  } catch (e: unknown) {
    throw e;
  }
};

const deleteTask = async (id: any) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID");
  }
  try {
    const tasks = await tasksSchema.deleteOne({ _id: id });
    if (tasks && tasks.deletedCount >= 1) {
      return tasks;
    } else {
      throw new Error("No matching record found to delete");
    }
  } catch (e: unknown) {
    throw e;
  }
};

const createTask = async (payload: ITaskPayload) => {
  try {
    const tasks = await tasksSchema.create(payload);
    if (tasks) {
      return tasks;
    } else {
      throw new Error("No results found");
    }
  } catch (e: unknown) {
    throw e;
  }
};

const updateTask = async (id: any, payload: ITaskPayload) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID");
  }
  const { title, description } = payload;
  try {
    const tasks = await tasksSchema.findOneAndUpdate(
      { _id: id },
      { title, description }
    );
    if (tasks) {
      const updatedTask = await tasksSchema.findById(id);
      return updatedTask;
    } else {
      throw new Error("No results found");
    }
  } catch (e: unknown) {
    throw e;
  }
};

export default {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask
}