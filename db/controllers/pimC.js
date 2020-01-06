const Pim = require('../models/pim.js');

const addPim = (data) => {
  const pokemon = new Pim({data});
  pokemon.save((err) => {
    if (err) return handleError(err);
    else console.log(`Pokemon '${data.name}' added!`)
  });
};

const findPim = (data) => {

}

const editPim = (data) => {

}

const deletePim = (data) => {
  
}

module.exports = {
  addPim,
  findPim,
  editPim,
  deletePim,
};
