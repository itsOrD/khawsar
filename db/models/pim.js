const mongoose = require('mongoose');
const db = require('../index.js');

const pimSchema = mongoose.Schema({
  name: String,
  // favorite: String,
  // captured: Boolean,
  // rating: Number,
  // added: {
  //   type: Date,
  //   default: Date.now
  // },
  image: String,
});

const Pim = mongoose.model('Pim', pimSchema);

module.exports = {
  Pim,
};
