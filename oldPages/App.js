import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import MovieIcon from "@mui/icons-material/Movie";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";

import SignInSignUp from "./Pages/SignInSignUp/SignInSignUp";
import Home from "./Pages/Home/Home";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  backgroundColor: "#E94560",
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  backgroundColor: "#E94560",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isLoggedIn, setLoggedIn] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{ backgroundColor: "#16213E" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
                pl: 1.5,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              App Name
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            {isLoggedIn ? (
              <List sx={{ position: "fixed", left: 0 }}>
                <ListItem>
                  <ListItemIcon sx={{ pl: 1, color: "#ECF0F1" }}>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "#ECF0F1" }}
                    primary={`UserName`}
                  />
                </ListItem>
              </List>
            ) : null}

            <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "#ECF0F1",
                  textDecoration: "none",
                };
              }}
              to={`/ott`}
            >
              <ListItem button>
                <ListItemIcon sx={{ pl: 1, color: "white" }}>
                  <MovieIcon />
                </ListItemIcon>
                <ListItemText primary="Shows" />
              </ListItem>
            </NavLink>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "#ECF0F1",
                  textDecoration: "none",
                };
              }}
              to={`/standup-comedy`}
            >
              <ListItem button>
                <ListItemIcon sx={{ pl: 1, color: "white" }}>
                  <TheaterComedyIcon />
                </ListItemIcon>
                <ListItemText primary="Stand Up" />
              </ListItem>
            </NavLink>
          </List>
          <Divider />
          {isLoggedIn ? (
            <ListItem
              button
              sx={{ position: "absolute", bottom: 0, width: "inherit" }}
              onClick={() => {}}
            >
              <ListItemIcon sx={{ pl: 1, color: "#ECF0F1" }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: "#ECF0F1" }} primary="Logout" />
            </ListItem>
          ) : (
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "#ECF0F1",
                  textDecoration: "none",
                };
              }}
              to={`/signIn`}
            >
              <ListItem
                button
                sx={{ position: "absolute", bottom: 0, width: "100%" }}
              >
                <ListItemIcon sx={{ pl: 1, color: "#ECF0F1" }}>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItem>
            </NavLink>
          )}
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            pt: 10,
            backgroundColor: "#1A1A2E",
            minHeight: "100vh",
            width: "100%",
          }}
        >
          <Routes>
            <Route path="/signIn" element={<SignInSignUp />} />
            <Route path="/" element={<Home />} />

            <Route path="/ott" element={<SignInSignUp />} />
            <Route path="/standup-comedy" element={<SignInSignUp />} />
            <Route path="/show/:id" element={<SignInSignUp />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
