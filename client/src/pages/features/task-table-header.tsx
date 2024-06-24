import { TableHead, TableRow, TableCell } from "@mui/material";

export default function TaskTableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center" sx={{ fontWeight: "bold" }}>
          ID
        </TableCell>
        <TableCell align="center" sx={{ fontWeight: "bold" }}>
          Description
        </TableCell>
        <TableCell align="center" sx={{ fontWeight: "bold" }}>
          Task Completed
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
