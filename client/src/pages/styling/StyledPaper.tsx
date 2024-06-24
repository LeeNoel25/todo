import React from "react";
import { Paper } from "@mui/material";

const StyledPaper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Paper
    elevation={3}
    sx={{ padding: 2, width: "100%", maxWidth: 600, marginBottom: 4 }}
  >
    {children}
  </Paper>
);

export default StyledPaper;
