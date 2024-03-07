const taskService = require("../services/tasksService");

exports.getAllTasks = async (req, res) => {
  try {
    const allTasks = await taskService.getAllTasks();
    if (allTasks) {
      res.status(200).send(allTasks);
    } else {
      res.status(404).send({ message: "Tasks not found" });
    }
  } catch (e) {
    console.log("Error in controller", e.message);
    res.status(500).send({ message: e.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const allTasks = await taskService.createTask(req?.body);
    if (allTasks) {
      res.status(200).send(allTasks);
    } else {
      res.status(404).send({ message: "Tasks not found" });
    }
  } catch (e) {
    console.log("Error in controller", e.message);
    res.status(500).send({ message: e.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const allTasks = await taskService.updateTask(req?.params?.id, req?.body);
    if (allTasks) {
      res.status(200).send(allTasks);
    } else {
      res.status(404).send({ message: "Tasks not found" });
    }
  } catch (e) {
    console.log("Error in controller", e.message);
    res.status(500).send({ message: e.message });
  }
};

exports.getTask = async (req, res) => {
  try {
    const allTasks = await taskService.getTask(req?.params?.id);
    if (allTasks) {
      res.status(200).send(allTasks);
    } else {
      res.status(404).send({ message: "Tasks not found" });
    }
  } catch (e) {
    console.log("Error in controller", e.message);
    res.status(500).send({ message: e.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const allTasks = await taskService.deleteTask(req?.params?.id);
    if (allTasks) {
      res.status(200).send(allTasks);
    } else {
      res.status(404).send({ message: "Tasks not found" });
    }
  } catch (e) {
    console.log("Error in controller", e.message);
    res.status(500).send({ message: e.message });
  }
};
