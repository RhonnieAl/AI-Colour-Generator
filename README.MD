# Ai Colour Generator

This is an Ai colour palette generator app, powered by OpenAi.

Input any colour palette you have in mind and get back Colors that matches the
mood and feeling of your input.

Try it now online (please allow for ~30 sec loading time):

- https://store-api-rxgj.onrender.com

`CLICK` the colour to copy the Hexadecimal colour code to your clipboard.

![Ai-Colour-Generator](https://github.com/RhonnieAl/AI-Colour-Generator/blob/master/screenshots/Screenshot1.png)

The accuracy of chatGPT leaves something to be desired at times. Please allow
for a couple tries if searching for something specific. Results may vary.

![Ai-Colour-Generator](https://github.com/RhonnieAl/AI-Colour-Generator/blob/master/screenshots/Screenshot2.png)

## Running Locally: Prerequisites

Please make sure you have `Node.js` installed on your machine and `Git` version
control system to run project locally.

Please make sure you have an
[OpenAI](https://platform.openai.com/docs/api-reference/introduction) user
account and access to your API key.

## Cloning the Repository

To clone this repository to your local machine, `cd` to your desired directory
(e.g `cd Desktop`).

Then run the following git clone command. This will create a folder called
`Ai-Colour-Generator` on your specified directory.

```sh
git clone https://github.com/RhonnieAl/AI-Colour-Generator
```

## Project Setup

Run `npm install` to install node dependencies

Run `npm start` or `node app.js`to kickstart server.

In order to run the project, create a .env file, set your `OPENAI_API_KEY` and
`OPEN_AI_ORG`with a correct "connection string" to your account.

In order to avoid port collisions, port 3100 is used, feel free to change it.

Great :) Happy testing!

### Frontend

Frontend is HTML, CSS and vanilla JavaScript.

An HTTP request is sent with the `userPrompt` that returns an array of colors.

The colors object Hexadecimal codes are then extracted and displayed on the
frontend

### HTTP Requests

POST requests are received on the following endpoint

- `/palette` : Where user-prompts are recieved, routed to OpenAI and responses
  served on the homepage

Form submissions do not reload the page but are rerouted instead.

## Valid Queries

When quering, use statements instead of questions. For example

` coral reef colour palette` or ` Finnish Flag` or ` Neon colour palette`.

### Error Handling

Errors are caught globally using middleware `error-handler.js` with the help of
library
[express-async-errors](https://www.npmjs.com/package/express-async-errors) for
catching Async Errors. The library throws any async error without having to pass
it to the next middleware as native Express does.

Instead of writing an Async-wrapper function with try-catch and next(), we throw
the error with the help of `express-async-errors` to our custom error handler in
`error-handler.js` and there do anything, for example show it on the console or
return a message on the browser.

Hobby Project maintined by [Rhonnie Allan](https://github.com/RhonnieAl)
Inspired by Colt Steele.
