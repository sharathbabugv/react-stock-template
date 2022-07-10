import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
} from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const [isDashboard, setIsDashboard] = useState(true);
  const navigate = useNavigate();

  function itemClick(data) {
    switch (data.index) {
      case 1:
        setIsDashboard(false);
        navigate("/order-history");
        break;
      default:
        setIsDashboard(true);
        navigate("/dashboard");
        break;
    }
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 100,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 100, boxSizing: "border-box" },
      }}
    >
      <Toolbar />

      <Box sx={{ overflow: "auto" }}>
        <List className="list-items">
          {["Dashboard", "Order History"].map((text, index) => (
            <ListItem
              key={text}
              className={
                index === 0
                  ? isDashboard
                    ? "active"
                    : ""
                  : !isDashboard
                  ? "active"
                  : ""
              }
              disablePadding
              sx={{ display: "block" }}
            >
              <ListItemButton
                onClick={() => {
                  itemClick({ index });
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 0,
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? (
                    <DashboardOutlinedIcon />
                  ) : (
                    <ReceiptOutlinedIcon />
                  )}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideNav;
