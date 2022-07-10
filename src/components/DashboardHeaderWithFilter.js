import {
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import AppTheme from "../theme/themes";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import { userClickedAscending, userClickedDescending } from "../redux/actions";
import { useDispatch } from "react-redux";

const settings = ["High - Low", "Low - High"];

const DashboardHeaderWithFilter = (props) => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [sortText, setSortText] = useState("High - Low");
  const dispatch = useDispatch();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (data) => {
    switch (data.setting) {
      case "Low - High":
        setSortText("Low - High");
        dispatch(userClickedAscending());
        break;
      default:
        setSortText("High - Low");
        dispatch(userClickedDescending());
        break;
    }
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={AppTheme}>
      <Grid container alignItems="center">
        <Grid
          item
          xs={8}
          sx={{ display: { xs: "none", sm: "block", textAlign: "start" } }}
        >
          <DashboardHeader name={props.name} />
        </Grid>

        <Grid
          item
          alignItems="flex-end"
          xs={4}
          sx={{ display: { xs: "none", sm: "block", textAlign: "end" } }}
        >
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="end"
          >
            <Typography variant="subtitle2" style={{ fontSize: "12px" }}>
              Sort By :
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: "12px" }}>
              {sortText}
            </Typography>
            <IconButton
              size="small"
              aria-haspopup="true"
              sx={{ p: 0, m: 0 }}
              onClick={handleOpenUserMenu}
            >
              {anchorElUser ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </IconButton>

            <Menu
              sx={{ mt: "25px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={() => {
                setAnchorElUser(false);
              }}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleCloseUserMenu({ setting })}
                >
                  <Typography
                    textAlign="center"
                    variant="subtitle2"
                    style={{ fontSize: "12px" }}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Stack>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default DashboardHeaderWithFilter;
