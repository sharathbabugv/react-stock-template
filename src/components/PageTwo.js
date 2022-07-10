import { Box, Stack, Toolbar, Typography } from "@mui/material";

const PageTwo = () => {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, backgroundColor: "#f2f2f2" }}
    >
      <Toolbar />

      <Stack spacing={2} direction="row">
        <Typography>Order History</Typography>
        <Typography>Past 1 week</Typography>
      </Stack>

    
    </Box>
  );
};
export default PageTwo;
