const Firebase = require("firebase");
const consts = require("./consts");
const availableDbNames = ["restos", "events", "cines", "moods"];
const Express = require("express");

Firebase.initializeApp(consts.firebaseAuth);
var ref = Firebase.database().ref("/");

var newEventRouter = Express.Router();

availableDbNames.forEach(function(dbName) {
  newEventRouter.route(`/${dbName}`)
    .post(function(req, res) {
      ref.child(dbName).push(req.body, function(err) {
          if (err)
              res.send(err);

          res.json({
              message: 'Success'
          });
      });
    })
});

newEventRouter.route("/")
  .get(function(req, res) {
    res.send("Woops ! You shouldn't be here...");
  })

module.exports = {
  newEventRouter: newEventRouter
}
