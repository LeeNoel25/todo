import { createContext, useState, useEffect } from "react";
import { Task } from "../../types/Interface";
import fetchAllTasks from "../api/fetchAllTasks";

export interface TaskContextProps {
  allTasks: Task[];
  setAllTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  refreshTasksList: () => void;
}

//Creating the Context
const TaskContext = createContext<TaskContextProps | undefined>(undefined);

// Provider component that wraps the entire app
export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [allTasks, setAllTasks] = useState<Task[]>([]);

  // Function to refresh the tasks list
  const refreshTasksList = async () => {
    try {
      const tasks = await fetchAllTasks();
      setAllTasks(tasks);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  // Fetch the tasks list on component mount
  useEffect(() => {
    refreshTasksList();
  }, []);

  // Provider component that wraps the entire app
  return (
    <TaskContext.Provider value={{ allTasks, setAllTasks, refreshTasksList }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
