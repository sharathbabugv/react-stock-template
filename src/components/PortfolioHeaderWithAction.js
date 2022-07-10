import { Grid, IconButton, Stack, ThemeProvider, Typography } from "@mui/material";
import AppTheme from "../theme/themes";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import DashboardHeader from "./DashboardHeader";

const PortfolioHeaderwithAction = (props) => {
  
  return (
    <ThemeProvider theme={AppTheme}>
      <Grid container alignItems="center">
        <Grid
          item
          xs={8}
          sx={{ display: { xs: "none", sm: "block", textAlign: "start" } }}
        >
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
            <Typography variant="subtitle2" style={{ color: '#00c637'}}>{props.action}</Typography>
            <IconButton size="small" style={{ color: '#00c637' }}>
              <EqualizerIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default PortfolioHeaderwithAction;
