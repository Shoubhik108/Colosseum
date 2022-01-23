import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const RecomendationCard = ({ movie }) => {
  return (
    <Card sx={{ maxWidth: 290 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={`${movie.imageurl}`}
          alt={`${movie.title}`}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#16213E" }}
          >
            {movie.title}
          </Typography>
          <Typography gutterBottom variant="subtitle">
            {movie.released}
          </Typography>
          {" · "}
          <Typography
            gutterBottom
            variant="subtitle"
            sx={{ color: "#16213E", fontWeight: "bold" }}
          >
            {movie.imdbrating}
          </Typography>
          <br />
          {movie.genre.map((g) => (
            <Typography
              gutterBottom
              variant="subtitle"
              sx={{ color: "#E94560" }}
            >
              {g + " · "}
            </Typography>
          ))}
          <Typography variant="body2" color="text.secondary">
            {movie.synopsis}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RecomendationCard;
