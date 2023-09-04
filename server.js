const express = require("express");
const next = require("next");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./database/schema");

const PORT = process.env.PORT || 3000;

// nothing ...

const app = next({ dev: false });
const handle = app.getRequestHandler();

const root = { hello: () => "Hi! this is Sobhan!" };

app.prepare().then(() => {
    const server = express();

    server.use(
        "/graphql",
        graphqlHTTP({
            schema,
            graphiql: true,
            rootValue: root,
        })
    );

    server.get("/writings", (req, res) => {
        return app.render(req, res, "/writings");
    });
    server.get("/news", (req, res) => {
        return app.render(req, res, "/news");
    });
    server.get("/contact", (req, res) => {
        return app.render(req, res, "/contact");
    });

    // server.get("/form", (req, res) => {
    //     return app.render(req, res, "/form");
    // });

    server.get("*", (req, res) => {
        handle(req, res);
    });

    server.listen(PORT, () => console.log("app is published on the port 3000"));
});
