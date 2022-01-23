require("dotenv").config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello to Colosseum API");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
r;
