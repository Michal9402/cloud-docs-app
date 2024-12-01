// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://a7467554e3c2dccdae8604c74ba4414a@o4508393669459968.ingest.de.sentry.io/4508393682108496",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
  tracesSampleRate: 1.0,
});
