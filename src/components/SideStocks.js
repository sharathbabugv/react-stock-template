import {
  Box,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { GetData } from "../data/stock";
import DashboardHeader from "./DashboardHeader";

let extractStocks = (x) => x.stocks;

const SideStocks = () => {
  const stocksList = GetData("STOCKS_LIST");

  // looping the loop and making the required json format
  const keysArray = Object.keys(extractStocks(stocksList));
  const valuesArray = Object.values(extractStocks(stocksList));
  for (let i = 0; i < keysArray.length; i++) {
    valuesArray[i].id = keysArray[i];
  }

  console.log(valuesArray);

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
          <DashboardHeader name="Stocks(5)"></DashboardHeader>
        </Box>
        <Divider />

        <TableContainer
          sx={{
            display: "flex",
            "& > :not(style)": {
              width: "100%",
            },
          }}
        >
          <Table aria-label="simple table" size="small">
            <TableBody>
              {valuesArray.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell scope="row">
                    <Typography
                      variant="subtitle2"
                      style={{ fontSize: "16px" }}
                    >
                      {row.stockName}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="subtitle2"
                      style={{
                        fontSize: "16px",
                        color: row.profit_loss_percentage > 0 ? "#00C637" : "#FC6565",
                      }}
                    >
                      {`${
                        row.profit_loss_percentage > 0
                          ? "+" + Math.round(row.profit_loss_percentage * 100) / 100
                          : Math.round(row.profit_loss_percentage * 100) / 100
                      }`}
                      %
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      style={{ fontSize: "12px" }}
                    >
                      ₹{`${Math.round((row.averagePurchasePrice * row.quantity)* 100) / 100}`}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default SideStocks;
