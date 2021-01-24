// Mongoose Allows you to create some enforcable structure for MongoDB douments
// for more info visit mongoose docs
const mongoose = require("mongoose");
const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  count: { type: Number, required: true },
  price: { type: Number, required: true },
});

const Item = mongoose.model("Item", ItemSchema);
module.exports = { Item };
