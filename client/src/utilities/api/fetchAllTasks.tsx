import axios from 'axios';
import { Task } from '../../types/Interface';

export default async function fetchAllTasks(): Promise<Task[]> {
  try {
    const response = await axios.get<Task[]>(
      'http://localhost:3000/api/v1/tasks',
      {
        timeout: 10000,
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw new Error('Failed to fetch tasks. Please try again.');
  }
}
