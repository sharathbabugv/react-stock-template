import { Box, Grid,Toolbar } from "@mui/material";
import { GetData } from "../data/stock";
import DashboardHeader from "./DashboardHeader";
import DashboardHeaderWithFilter from "./DashboardHeaderWithFilter";
import IndexComponent from "./IndexComponent";
import ListedStocks from "./ListedStocks";
import NewsComponent from "./NewsComponent";
import Portfolio from "./Portfolio";
import RecentTransactions from "./RecentTransactions";
import SideStocks from "./SideStocks";

const PageOne = () => {
  const news = GetData("LATEST_NEWS");
  const array = Object.entries(news);


  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, backgroundColor: "#f2f2f2" }}
    >
      <Toolbar />

      <Grid container spacing={5}>
        <Grid item xs={12} sm={8}>
          {/* First Component - Index */}
          <DashboardHeader name="Index" />
          <IndexComponent />

          {/* Second Component - Listed Stocks */}
          <DashboardHeaderWithFilter name="Listed Stocks" />
          <ListedStocks />

          {/* Thirs Component - News */}
          <DashboardHeader name="News" />

          <Grid container direction="row" spacing={3} alignItems="stretch">
            <Grid item xs={12} sm={4}>
              <NewsComponent path="https://images.moneycontrol.com/static-mcnews/2020/04/stock-in-the-news.jpg" title={array[0][0]} description={array[0][1]}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <NewsComponent path="https://www.xm.com/wp-content/uploads/2020/01/earnings3.png" title={array[1][0]} description={array[1][1]}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <NewsComponent path="https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg" title={array[2][0]} description={array[2][1]}/>
            </Grid>
          </Grid>

        </Grid>

        <Grid item xs={12} sm={4}>
          <Portfolio />

          <SideStocks />

          <RecentTransactions />
        </Grid>
      </Grid>
    </Box>
  );
};
export default PageOne;
