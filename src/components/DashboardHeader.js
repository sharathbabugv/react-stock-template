import { ThemeProvider, Typography } from "@mui/material";
import AppTheme from "../theme/themes";

const DashboardHeader = (props) => {
  return (
    <ThemeProvider theme={AppTheme}>
      <Typography variant="body1">{props.name}</Typography>
    </ThemeProvider>
  );
};
export default DashboardHeader;
