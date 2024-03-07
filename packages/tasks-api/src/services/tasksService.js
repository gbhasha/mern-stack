const tasksSchema = require("../model/tasksSchema");
const { Types } = require("mongoose");

exports.getAllTasks = async () => {
  try {
    const allTasks = await tasksSchema.find({});
    if (allTasks) {
      return allTasks;
    } else {
      throw new Error("No results found");
    }
  } catch (e) {
    throw e;
  }
};

exports.getTask = async (id) => {
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
  } catch (e) {
    throw e;
  }
};

exports.deleteTask = async (id) => {
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
  } catch (e) {
    throw e;
  }
};

exports.createTask = async (payload) => {
  try {
    const tasks = await tasksSchema.create(payload);
    if (tasks) {
      return tasks;
    } else {
      throw new Error("No results found");
    }
  } catch (e) {
    throw e;
  }
};

exports.updateTask = async (id, payload) => {
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
  } catch (e) {
    throw e;
  }
};
