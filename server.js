const express = require("express");
const next = require("next");

const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/news", (req, res) => {
    return app.render(req, res, "/news");
  });

  server.get("/writings", (req, res) => {
    return app.render(req, res, "/writings");
  });

  server.get("*", (req, res) => {
    handle(req, res);
  });

  server.listen(3000, () => console.log("app is published on the port 3000"));
});
