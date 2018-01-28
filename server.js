const Express = require("express");
const Server = Express();
const BodyParser = require('body-parser');
const consts = require("./src/consts.js");
const api = require("./src/api.js");

Server.use(BodyParser.urlencoded({
    extended: true
}));
Server.use(BodyParser.json());

Server.use("/api/new", api.newEventRouter);

Server.use("/", Express.static('dist'));

Server.listen(consts.serverPort);
