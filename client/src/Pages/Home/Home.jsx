import React from "react";

import { NavLink } from "react-router-dom";

import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";

const Home = () => {
  return (
    <>
      <Grid container sx={{ height: "100%", backgroundColor: "#ECF0F1" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card
            sx={{ height: "100%", width: "100%", backgroundColor: "#ECF0F1" }}
          >
            <NavLink
              style={() => {
                return {
                  color: "#E94560",
                  textDecoration: "none",
                };
              }}
              to={`/ott`}
            >
              <CardActionArea sx={{ height: "100%", width: "100%" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    Shows
                  </Typography>
                </CardContent>
              </CardActionArea>
            </NavLink>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card
            sx={{ height: "100%", width: "100%", backgroundColor: "#ECF0F1" }}
          >
            <NavLink
              style={() => {
                return {
                  color: "#E94560",
                  textDecoration: "none",
                };
              }}
              to={`/standup-comedy`}
            >
              <CardActionArea sx={{ height: "100%", width: "100%" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    StandUp Comedy
                  </Typography>
                </CardContent>
              </CardActionArea>
            </NavLink>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
