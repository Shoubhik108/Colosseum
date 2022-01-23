import React from "react";
import axios from "axios";
import { Grid, Typography } from "@mui/material";

import RecomendationCard from "../../components/RecomendationCard/RecomendationCard";

const options = {
  method: "GET",
  url: "https://ott-details.p.rapidapi.com/advancedsearch",
  params: {
    start_year: "1970",
    end_year: "2020",
    min_imdb: "6",
    max_imdb: "7.8",
    genre: "action",
    language: "english",
    type: "movie",
    sort: "latest",
    page: "1",
  },
  headers: {
    "x-rapidapi-host": "ott-details.p.rapidapi.com",
    "x-rapidapi-key": "375726cbe2msh5da09ebc22f9f22p1682c2jsn576d93783061",
  },
};

export default function Recommendation() {
  const [movies, setMovies] = React.useState([]);
  React.useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
        p={4}
        sx={{ backgroundColor: "#E94560" }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            sx={{ color: "white" }}
          >
            Movie Recommendations
          </Typography>
        </Grid>
        {movies?.map((movie, i) => (
          <Grid item key={i}>
            <RecomendationCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
