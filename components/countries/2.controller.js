const store = require('./3.store');

function addCountry(name) {
  if (!name) {
    return Promise.reject('Invalid country');
  }

  const country = {
    name,
  };
  return store.add(country);
}

function listCountries() {
  return store.list();
}

function updateCountry(id, message) {
  return new Promise(async (resolve, reject) => {
    console.log(id);
    console.log(message);
    if (!id || !message) {
      reject('Invalid data');
      return false;
    }

    const result = await store.update(id, message);

    resolve(result);
  });
}

function deleteCountry(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Id invalido');
      return false;
    }

    store
      .remove(id)
      .then(() => {
        resolve();
      })
      .catch((e) => {
        reject(e);
      });
  });
}

module.exports = {
  addCountry,
  listCountries,
  updateCountry,
  deleteCountry
};
