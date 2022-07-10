import {
  Box,
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { GetData } from "../data/stock";
import RecentTransactionsHeader from "./RecentTransactionHeader";

const RecentTransactions = () => {
  const transactionHistory = GetData("RECENT_TRANSACTIONS");

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
          <RecentTransactionsHeader
            name="Recent Transactions"
            action="View all"
          />
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
              {transactionHistory.map((row) => (
                <TableRow
                  key={row.orderId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell scope="row">
                    <Typography
                      variant="subtitle2"
                      style={{ fontSize: "16px" }}
                    >
                      {row.tickr}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Stack>
                      <Typography
                        variant="subtitle2"
                        style={{
                          fontSize: "16px",
                          color: row.profitLoss > 0 ? "#00C637" : "#FC6565",
                        }}
                      >
                        {`${
                          row.profitLoss > 0
                            ? "+" + Math.round(row.profitLoss * 100) / 100
                            : Math.round(row.profitLoss * 100) / 100
                        }`}
                        %
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        style={{ fontSize: "12px" }}
                      >
                        ₹{`${Math.round(row.price * 100) / 100}`}
                      </Typography>
                    </Stack>
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

export default RecentTransactions;
