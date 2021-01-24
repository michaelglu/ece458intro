//Just some setup stuff, dw about this unless you are actually using mongoose in your project
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const options = { useNewUrlParser: true };
mongoose.connect("YOUR_URL_HERE", options);

module.exports = { mongoose };
