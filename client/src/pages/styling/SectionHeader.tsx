import React from "react";
import { Typography } from "@mui/material";

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <Typography variant="h4" gutterBottom>
    {title}
  </Typography>
);

export default SectionHeader;
