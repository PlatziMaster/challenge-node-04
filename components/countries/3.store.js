const Model = require('./4.model');

function addCountry(user) {
  const myCountry = new Model(user);
  return myCountry.save();
}

function listCountries() {
  return Model.find();
}

async function updateCountry(id, message) {
  const foundMessage = await Model.findOne({
    _id: id,
  });

  foundMessage.message = "Mexico";

  const newMessage = await foundMessage.save();
  console.log(newMessage)
  return newMessage;
}

function removeCountry(id) {
  return Model.deleteOne({
    _id: id,
  });
}

module.exports = {
  add: addCountry,
  list: listCountries,
  update: updateCountry,
  remove: removeCountry,
};
