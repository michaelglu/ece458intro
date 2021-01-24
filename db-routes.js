const { Item } = require("./Item.js");

const addItem = ({ name, count, price }) => {
  // Promises are an abstraction to handle async logic in NodeJS
  // They can either resolve when things go right, or reject when things go wrong
  return new Promise((resolve, reject) => {
    //create new Item objec
    const item = new Item({ name, count, price });
    //save to DB
    item.save().then(
      (success) => {
        resolve({ message: "added item", item });
      },
      (error) => {
        reject(error);
      }
    );
  });
};

const getItems = () => {
  return new Promise((resolve, reject) => {
    //empty find returns all documents in a collection (Mongo collection <=> SQL Table)
    Item.find().then(
      (items) => resolve(items),
      (error) => reject(error)
    );
  });
};

// This is how you export funcitons/objects/classes in node
module.exports = { addItem, getItems };
