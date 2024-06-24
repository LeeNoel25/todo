import AddTaskForm from './add-task-form';
import TaskList from './task-list';
import { Box } from '@mui/material';
import SectionHeader from '../styling/SectionHeader';
import StyledPaper from '../styling/StyledPaper';

const HomePage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      alignItems="center"
      paddingY={5}
    >
      <SectionHeader title="Add Task" />
      <StyledPaper>
        <AddTaskForm />
      </StyledPaper>
      <SectionHeader title="Task List" />
      <StyledPaper>
        <TaskList />
      </StyledPaper>
    </Box>
  );
};

export default HomePage;
