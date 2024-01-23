const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/movies", (req, res) => {
  const movies = [];

  res.status(200).json(movies);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
