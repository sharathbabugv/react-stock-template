import {
  AppBar,
  Avatar,
  Box,
  Divider,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../redux/actions";
import { GetData } from "../data/stock";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1.5px solid",
  borderRadius: "10px",
  borderColor: "#e2e2e2",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    color: "#000000",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  color: "#e2e2e2",
  alignItems: "center",
  justifyContent: "center",
}));

const settings = ["Logout"];

const Headerbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();
  const userWallet = GetData("USER_WALLET");

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    localStorage.removeItem("session-key");
    dispatch(userLoggedOut());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={1}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        style={{ background: "#FFFFFF" }}
      >
        <Toolbar>
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Groww_app_logo.png" alt="App Logo" style={{width: 100, heigh: 48}}/>

          <Box sx={{ flexGrow: 1 }} />

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Divider
            orientation="vertical"
            flexItem
            style={{
              alignSelf: "auto",
              backgroundColor: "#e2e2e2",
              height: "35px",
              margin: "0px 12px",
              width: "0.5px",
            }}
          />

          <IconButton size="small">
            <AccountBalanceWalletOutlinedIcon />
          </IconButton>

          <Typography
            variant="subtitle2"
            style={{ fontSize: "16px", color: "#000000" }}
          >
            ₹{Math.round(userWallet.walletBalance * 100)/100}
          </Typography>

          <Box sx={{ flexGrow: 0.015 }} />

          <Divider
            orientation="vertical"
            flexItem
            style={{
              alignSelf: "auto",
              backgroundColor: "#e2e2e2",
              height: "35px",
              margin: "0px 12px",
              width: "0.5px",
            }}
          />

          <Avatar
            alt="Dustin"
            size="large"
            edge="end"
            aria-label="account of current user"
            color="inherit"
            sx={{width:36, height: 36}}
            src="https://i.pinimg.com/736x/e1/56/f2/e156f23c93f823e18e2958b8a328ce00--netflix-original-series-the-netflix.jpg"
          />

          <Box sx={{ flexGrow: 0.015 }} />

          <Stack direction="row" justifyContent="center" alignItems="center">
            <Typography
              variant="subtitle2"
              style={{ fontSize: "16px", color: "#000000" }}
            >
              Dustin
            </Typography>

            <IconButton
              size="small"
              aria-haspopup="true"
              sx={{ p: 0 }}
              onClick={handleOpenUserMenu}
            >
              {anchorElUser ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </IconButton>

            <Menu
              sx={{ mt: "35px" }}
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Headerbar;
