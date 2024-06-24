import axios from 'axios';

export default async function deleteRequest(url: string): Promise<void> {
  try {
    await axios.delete(url, {
      timeout: 10000,
    });
  } catch (error) {
    console.error(error);
    throw new Error('Failed to delete the task.');
  }
}
