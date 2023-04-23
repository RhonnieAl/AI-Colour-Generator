require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const port = process.env.PORT || 3100;

const aiCall = require("./openai");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

//Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("<h1>Home Page</h1>");
});

// The user request prompt
app.post("/palette", async (req, res) => {
  const userPrompt = req.body.userPrompt;

  // The OpenAI completion call
  const aiResponse = await aiCall(userPrompt);
  // Parse the openai response into an array object
  response = {
    colors: JSON.parse(aiResponse),
  };
  console.log("Success! You have been PINGED!");
  // Return array object of colors
  res.status(200).json(response);
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
