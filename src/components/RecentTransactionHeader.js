import { Grid, Stack, ThemeProvider, Typography } from "@mui/material";
import AppTheme from "../theme/themes";
import DashboardHeader from "./DashboardHeader";

const RecentTransactionsHeader = (props) => {
  
  return (
    <ThemeProvider theme={AppTheme}>
      <Grid container alignItems="center">
        <Grid
          item
          xs={8}
          sx={{ display: { xs: "none", sm: "block", textAlign: "start" } }}>
          <DashboardHeader name = {props.name}/>
        </Grid>
       
        <Grid
          item
          alignItems="flex-end"
          xs={4}
          sx={{ display: { xs: "none", sm: "block", textAlign: "end" } }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="end"
          >
            <Typography sx={{textDecoration: 'underline'}} variant="subtitle2">{props.action}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default RecentTransactionsHeader;
