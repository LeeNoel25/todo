import TaskTableHeader from './task-table-header';
import TaskRows from './task-rows';
import { useTasks } from '../../utilities/context/useTask';
import {
  Table,
  TableContainer,
  TableBody,
  Box,
  Typography,
} from '@mui/material';

export default function TaskList() {
  const { allTasks } = useTasks();
  return (
    <>
      <Box display="flex" flexDirection="column">
        {allTasks.length > 0 ? (
          <TableContainer>
            <Table sx={{ maxWidth: 650 }} aria-label="simple table">
              <TaskTableHeader />
              <TableBody>
                {allTasks.map((task, index) => (
                  <TaskRows key={task.id} task={task} index={index + 1} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Box>
            <Typography variant="h6" gutterBottom>
              No tasks found
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
}
