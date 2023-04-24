This is an AI colour palette generator app.

Input anything you want and it will return the colour palette that matches the
mood and feeling of your input.

### HTTP Requests

GET requests are received on the following endpoint:

- `/` : Where the homepage is served

POST requests are received on the following endpoint

- `/palette` : Where user prompts are recieved, routed to OpenAI and responses
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
