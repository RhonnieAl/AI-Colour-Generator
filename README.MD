This is an AI colour palette generator app.

Input any colour palette you have in mind and get back Colors that matches the
mood and feeling of your input.

### Frontend

Frontend is HTML, CSS and vanilla JavaScript.

An HTTP request is sent with the `userPrompt` that returns an array of colors.

The colors object HExadecimal code is then extracted and displayed on the
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
