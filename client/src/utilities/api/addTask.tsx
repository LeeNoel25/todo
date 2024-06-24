import axios from 'axios';
import { Task } from '../../types/Interface';

export default async function postRequest(
  url: string,
  data: object
): Promise<Task> {
  try {
    const response = await axios.post(url, data, {
      timeout: 10000,
    });
    return response.data as Task;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create the task.');
  }
}
