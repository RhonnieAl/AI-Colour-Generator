require("dotenv").config();

const aiCall = require("./openai");

const express = require("express");
const app = express();
const port = process.env.PORT || 3100;

//Middleware
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Home Page</h1>");
});

// The user request prompt
app.post("/palette", (req, res) => {
  // The OpenAI completion call

  console.log("Success! You have been PINGED!");
  // Return array of colors
  res.status(200).json(req.body);
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404: Page Not Found</h1>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
