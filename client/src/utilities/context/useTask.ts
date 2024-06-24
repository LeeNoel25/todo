import { useContext } from "react";
import TaskContext, { TaskContextProps } from "./TaskContext";

export const useTasks = (): TaskContextProps => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
