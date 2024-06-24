import { Box } from '@mui/material';

interface StyledBoxProps {
  children: React.ReactNode;
  sx?: {
    minHeight?: string;
    paddingY?: number;
    bgcolor?: string;
  };
}

const StyledBox: React.FC<StyledBoxProps> = ({ children }) => (
  <Box display="flex" flexDirection="column" >
    {children}
  </Box>
);

export default StyledBox;
