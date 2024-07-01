import { useContext } from 'react';
import TaskContext, { TaskContextProps } from './TaskContext';

// Custom hook to use the TaskContext
// TaskContextProps value={{ allTasks, setAllTasks, refreshTasksList }}>
export const useTasks = (): TaskContextProps => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};
