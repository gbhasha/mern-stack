import express, { Request, Response } from 'express'; 
import taskService  from "../services/tasksService";
import {ITask} from "../model/interfaces/ITask";

export const getAllTasks: express.RequestHandler = async (req: Request, res: Response) => {
  try {
    const allTasks: ITask[] = await taskService.getAllTasks();
    if (allTasks) {
      res.status(200).send(allTasks);
    } else {
      res.status(404).send({ message: "Tasks not found" });
    }
  } catch (e: unknown) {
    console.log("Error in controller", (e as Error).message);
    res.status(500).send({ message: (e as Error).message });
  }
};

export const createTask: express.RequestHandler = async (req: Request, res: Response) => {
  try {
    const allTasks = await taskService.createTask(req?.body);
    if (allTasks) {
      res.status(200).send(allTasks);
    } else {
      res.status(404).send({ message: "Tasks not found" });
    }
  } catch (e: unknown) {
    console.log("Error in controller", (e as Error).message);
    res.status(500).send({ message: (e as Error).message });
  }
};

export const updateTask: express.RequestHandler = async (req: Request, res: Response) => {
  try {
    const allTasks = await taskService.updateTask(req?.params?.id, req?.body);
    if (allTasks) {
      res.status(200).send(allTasks);
    } else {
      res.status(404).send({ message: "Tasks not found" });
    }
  } catch (e: unknown) {
    console.log("Error in controller", (e as Error).message);
    res.status(500).send({ message: (e as Error).message });
  }
};

export const getTask: express.RequestHandler = async (req: Request, res: Response) => {
  try {
    const allTasks = await taskService.getTask(req?.params?.id);
    if (allTasks) {
      res.status(200).send(allTasks);
    } else {
      res.status(404).send({ message: "Tasks not found" });
    }
  } catch (e: unknown) {
    console.log("Error in controller", (e as Error).message);
    res.status(500).send({ message: (e as Error).message });
  }
};

export const deleteTask: express.RequestHandler = async (req: Request, res: Response) => {
  try {
    const allTasks  = await taskService.deleteTask(req?.params?.id);
    if (allTasks) {
      res.status(200).send(allTasks);
    } else {
      res.status(404).send({ message: "Tasks not found" });
    }
  } catch (e: unknown) {
    console.log("Error in controller", (e as Error).message);
    res.status(500).send({ message: (e as Error).message });
  }
};
