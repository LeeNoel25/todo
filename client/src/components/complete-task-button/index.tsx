import { Task } from '../../types/Interface';
import deleteRequest from '../../utilities/api/deleteTask';
import { useSnackbar } from 'notistack';
import { Button } from '@mui/material';
import { useTasks } from '../../utilities/context/useTask';

interface DeleteTaskProps {
  task: Task;
}

const DeleteTask: React.FC<DeleteTaskProps> = ({ task }) => {
  const { refreshTasksList } = useTasks();
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = async () => {
    try {
      await deleteRequest(`http://localhost:3000/api/v1/tasks/${task.id}`);
      enqueueSnackbar('Task completed!', { variant: 'info' });
      refreshTasksList();
    } catch (error) {
      console.error('Failed to delete task:', error);
      enqueueSnackbar('Failed to delete task', { variant: 'error' });
    }
  };

  return (
    <Button onClick={handleClick} variant="contained" color="secondary">
      Complete
    </Button>
  );
};

export default DeleteTask;
