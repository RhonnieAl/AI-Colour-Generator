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
  console.log("You have been PINGED...");
  const userPrompt = req.body.userPrompt;

  if (userPrompt) {
    console.log("WE RECEIVED: ", userPrompt);

    // The OpenAI completion call
    /*     
    const aiResponse = await aiCall(userPrompt);
    console.log("aiResponse was: ", aiResponse);

    // Parse the openai response into an array object
    const response = {
      colors: JSON.parse(aiResponse),
    };
 */
    const response = {
      colors: ["#FA4D4D", "#FF8B6B", "#FFC281", "#FAF7A2", "#F9F9D0"],
    };

    // Return array object of colors
    res.status(200).json(response);
  } else {
    console.log("NO PROMPT RECEIVED");
  }
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
