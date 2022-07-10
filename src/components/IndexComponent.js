import {
  Avatar,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { GetData } from "../data/stock";

const IndexComponent = () => {
  const indexData = GetData("NIFTY_INDEX");

  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          width: "100%",
          mt: 2,
          mb: 2,
          p: 1,
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
            },
          }}
        >
          <Table aria-label="simple table" size="medium">
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Avatar
                    src="https://cdn-icons-png.flaticon.com/512/2285/2285545.png"
                    variant="square"
                    sx={{ width: 48, height: 48 }}
                  />
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle2" style={{ fontSize: "16px" }}>
                    {indexData.index}
                  </Typography>
                </TableCell>

                <TableCell align="right">
                  <Typography variant="subtitle2" style={{ fontSize: "16px" }}>
                    ₹
                    {`${Math.round(indexData.normalisedMarketCap * 100) / 100}`}
                  </Typography>
                </TableCell>

                <TableCell align="right">
                  <Typography
                    variant="subtitle2"
                    style={{
                      fontSize: "16px",
                      color:
                        indexData.gainLossPercent > 0 ? "#00C637" : "#FC6565",
                    }}
                  >
                    {`${
                      indexData.gainLossPercent > 0
                        ? "+" +
                          Math.round(indexData.gainLossPercent * 100) / 100
                        : Math.round(indexData.gainLossPercent * 100) / 100
                    }`}
                    %
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default IndexComponent;
