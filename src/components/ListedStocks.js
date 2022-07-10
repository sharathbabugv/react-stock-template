import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { GetData } from "../data/stock";


const ListedStocks = () => {
  const sortOrder = useSelector((state) => state.sortOrder.sortOrder);
  const sortedArray = []
    .concat(GetData("LISTED_STOCKS"))
    .sort((a, b) =>
      sortOrder === 0
        ? a.price < b.price
          ? 1
          : -1
        : a.price > b.price
        ? 1
        : -1
    );

  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          width: "100%",
          mt: 2,
          mb: 2,
          pt: 2,
          pb: 2,
        },
      }}
    >
      <Paper
        sx={{ borderRadius: "10px", borderColor: "#e2e2e2" }}
        variant="outlined"
        square
      >
        <TableContainer
          sx={{
            display: "flex",
            "& > :not(style)": {
              width: "100%",
              p: 2,
            },
          }}
        >
          <Table aria-label="simple table" size="medium">
            <TableBody>
              {sortedArray.map((row) => (
                <TableRow
                  key={row.stockId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
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
                      style={{ fontSize: "16px" }}
                    >
                      ₹{`${Math.round(row.price * 100)/100}`}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" justifyContent="end" spacing={1}>
                      <Typography
                        variant="subtitle2"
                        style={{
                          fontSize: "16px",
                          color:
                            row.profit_loss_percentage > 0
                              ? "#00C637"
                              : "#FC6565",
                        }}
                      >
                        {`${row.profit_loss_percentage > 0 
                          ? "+" + Math.round(row.profit_loss_percentage * 100) / 100  
                          :  Math.round(row.profit_loss_percentage * 100) / 100 }`}%
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        style={{ fontSize: "16px", color: "#C2C2C2" }}
                      >
                        (1D)
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">
                    <Stack
                      spacing={2}
                      direction="row"
                      alignItems="center"
                      justifyContent="end"
                    >
                      <Button
                        variant="contained"
                        sx={{ borderRadius: 3 }}
                        style={{
                          backgroundColor: "black",
                          padding: "8px 36px",
                        }}
                      >
                        Buy
                      </Button>
                      <Button
                        variant="outlined"
                        color="black"
                        sx={{ borderRadius: 3 }}
                        style={{
                          padding: "8px 36px",
                        }}
                      >
                        Sell
                      </Button>
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

export default ListedStocks;
