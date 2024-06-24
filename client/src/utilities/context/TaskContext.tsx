import React, { createContext, useState, useEffect } from "react";
import { Task } from "../../types/Interface";
import fetchAllTasks from "../api/fetchAllTasks";

export interface TaskContextProps {
  allTasks: Task[];
  setAllTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  refreshTasksList: () => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [allTasks, setAllTasks] = useState<Task[]>([]);

  const refreshTasksList = async () => {
    try {
      const tasks = await fetchAllTasks();
      setAllTasks(tasks);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  useEffect(() => {
    refreshTasksList();
  }, []);

  return (
    <TaskContext.Provider value={{ allTasks, setAllTasks, refreshTasksList }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
