# Hi there

I hope you're having a great day.

## Running the app

The project was created with CRA so the usual npm scripts apply. `npm ci` (in case of problems I was using node 14.6.0) and `npm start` starts the app on [http://localhost:3000](http://localhost:3000). I had deployed live version but it does not work because of CORS :(

To change a document simply change shortId/identifier in the url.

## Things I would also do (apart from tests)

-   Error handling - I naively assumed that the network always works and the request always succeeds (I know, first fallacy of distributed computing)
-   Dynamic routes - there is no checking if the artboard entered in the addressbar exist in the document
-   Responsive styles - the app is usable on small screens but could use some polishing here and there
-   There are relatively few components, so I did not go with an elaborated directory structure (YAGNI)

## Choices I made

-   Storing document id and artboard in the url. It's convenient, provides good UX but it's a shortcut and it's not production-ready as mentioned earlier.
-   GraphQL client. I did not want to go with a complicated one (Apollo with state management or Relay with complicated build). It's one query that can be sent with `fetch` and I might have as well chosen that.
-   All the "state" management is in the url so I did not see the need for redux
-   I'm not a fan of styled components so I've opted for traditional styling but skipped sass (mainly to avoid node-sass vs node version complications). I've kept variables as I find them essential to maintaining consistency.

# Things that may not be perfect with the design

-   My OCD did not allow me to use different fonts in each view like the design, so I took the liberty od standardizing it
-   I'm on linux now so I suspect text and icons might need some alignment on mac
-   Hopefully that's everything
