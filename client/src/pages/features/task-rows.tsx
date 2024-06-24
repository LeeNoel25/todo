import { Task } from "../../types/Interface";
import CompleteTaskButton from "../../components/complete-task-button";
import { TableRow, TableCell } from "@mui/material";

interface TaskFormProps {
  task: Task;
  index: number;
}

const TaskRows: React.FC<TaskFormProps> = ({
  task,
  index,
}) => {
  return (
    <TableRow>
      <TableCell align="center">{index}</TableCell>
      <TableCell align="center">{task.description}</TableCell>
      <TableCell align="center">
        <CompleteTaskButton task={task} />
      </TableCell>
    </TableRow>
  );
};

export default TaskRows;
