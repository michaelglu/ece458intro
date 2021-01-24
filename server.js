// This is how you import a library from node_modules
const express = require("express");
const bodyParser = require("body-parser");
//This is how you import files you created
const { mongoose } = require("./mongoose.js");
const { addItem, getItems } = require("./db-routes.js");
// This initializes express server
const app = express();
//make it possible to parse request body as json
app.use(bodyParser.json());

//This is how you define routes
app.get("/", (req, res) => {
  res.send("Welcome to My API Entrypoint");
});

app.get("/getItems", (req, res) => {
  getItems().then(
    (success) => res.send(success),
    (error) => {
      res.status(500).send(error);
    }
  );
});

app.post("/addItem", (req, res) => {
  addItem(req.body.item).then(
    (success) => res.send(success),
    (error) => res.status(500).send(error)
  );
});
//Need to Specify which port app should listen on; local testing: hardcode 3000
// deployment: need to grab PORT enviroment variable
app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on 3000`);
});
