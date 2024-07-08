import { Task } from '../../types/Interface';
import postRequest from '../../utilities/api/addTask';
import { useTasks } from '../../utilities/context/useTask';
import { Button, TextField, Box } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
// import isValidText from '../../utilities/validation/isValidText';

const AddTaskForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const blankTask = { id: '', description: '' };
  const [newTask, setNewTask] = useState<Task>(blankTask);
  const { allTasks, setAllTasks } = useTasks();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    // if (!isValidText(newTask.description)) {
    //   enqueueSnackbar('Only alphanumeric characters allowed', {
    //     variant: 'error',
    //   });
    //   return;
    // }
    try {
      const addedTask = await postRequest(
        'http://localhost:3000/api/v1/tasks',
        {
          description: newTask.description,
        }
      );
      setNewTask({ id: '', description: '' });
      setAllTasks([...allTasks, addedTask]);
      enqueueSnackbar('Task added successfully!', { variant: 'success' });
    } catch (error) {
      console.error('Failed to add task:', error);
      enqueueSnackbar('Failed to add task!', { variant: 'error' });
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <TextField
        type="text"
        name="description"
        placeholder="Add Task"
        value={newTask.description}
        onChange={handleChange}
        variant="outlined"
        sx={{ flexGrow: 1 }}
      />
      <Button variant="contained" sx={{ height: '56px' }} onClick={handleClick}>
        Add Task
      </Button>
    </Box>
  );
};

export default AddTaskForm;
