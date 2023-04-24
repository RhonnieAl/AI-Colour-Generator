# Ai Colour Generator

This is an Ai colour palette generator app, powered by OpenAi.

Input any colour palette you have in mind and get back Colors that matches the
mood and feeling of your input.

`CLICK` the colour to copy the Hexadecimal colour code to your clipboard.

![Ai-Colour-Generator](https://github.com/RhonnieAl/AI-Colour-Generator/blob/master/screenshots/Screenshot1.png)

The accuracy of chatGPT leaves something to be desired at times. Please allow
for a couple tries if searching for something specific. Results may vary.

![Ai-Colour-Generator](https://github.com/RhonnieAl/AI-Colour-Generator/blob/master/screenshots/Screenshot2.png)

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
