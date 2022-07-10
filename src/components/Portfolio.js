import { GetData } from "../data/stock";
import PortfolioHeaderwithAction from "./PortfolioHeaderWithAction";

const { Paper, Box, Divider, Grid, Typography } = require("@mui/material");

const Portfolio = () => {
  const userData = GetData("USER_STOCKS");
  const investment = userData.investment;
  const current = userData.current;

  const value = (current - investment) * 100;
  const profit = Math.round((value / investment) * 100) / 100

  var profitPercentage = "";
  if(profit > 0){
    profitPercentage = "+" + profit + "%"
  }else{
    profitPercentage = "-" + profit + "%"
  }


  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          width: "100%",
          mt: 2,
          mb: 2,
        },
      }}
    >
      <Paper
        sx={{ borderRadius: "10px", borderColor: "#e2e2e2" }}
        variant="outlined"
        square
      >
        <Box sx={{ p: 2 }}>
          <PortfolioHeaderwithAction name="Portfolio" action="Insight" />
        </Box>
        <Divider />
        <Grid container spacing={4} alignItems="center" sx={{ pt: 2, pb: 2 }}>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="subtitle1"
              noWrap
              component="div"
              style={{ color: "#000000" }}
              sx={{ display: { xs: "none", sm: "block", textAlign: "center" } }}
            >
              ₹{userData.investment}
            </Typography>

            <Typography
              variant="subtitle2"
              noWrap
              component="div"
              style={{ color: "#000000" }}
              sx={{ display: { xs: "none", sm: "block", textAlign: "center" } }}
            >
              Invested
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography
              variant="subtitle1"
              noWrap
              component="div"
              style={{ color: "#000000" }}
              sx={{ display: { xs: "none", sm: "block", textAlign: "center" } }}
            >
              ₹{userData.current}
            </Typography>

            <Typography
              variant="subtitle2"
              noWrap
              component="div"
              style={{ color: "#000000" }}
              sx={{ display: { xs: "none", sm: "block", textAlign: "center" } }}
            >
              Current
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography
              variant="subtitle1"
              noWrap
              component="div"
              style={{ color: "#00c637" }}
              sx={{ display: { xs: "none", sm: "block", textAlign: "center" } }}
            >
              {profitPercentage}
            </Typography>
            <Typography
              variant="subtitle2"
              noWrap
              component="div"
              style={{ color: "#000000" }}
              sx={{ display: { xs: "none", sm: "block", textAlign: "center" } }}
            >
              Returns
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Portfolio;
