const Pim = require('../models/pim.js');

const addPim = (req, res) => {
  Pim.create(data, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      console.log(`Pokemon '${data.name}' added!`);
      res.sendStatus(201);
    }
  });
};

const findPim = (req, res) => {
  Pim.find(data, (err, docs) => {
    if (err) {
      console.error(err);
      next(err);
      // res.sendStatus(404);
    } else {
      res.send(docs)
    }
  });
};

const editPim = (req, res) => {
  Pim.findOneAndUpdate(data, /* update, */ (err) => {
    if (err) {
      console.error(err);
      next(err);
      res.sendStatus(204);
    } else {
      res.sendStatus(202);
    }
  });
};

const deletePim = (req, res) => {
  Pim.deleteOne(data, (err) => {
    if (err) {
      console.error(err);
      next(err);
      res.sendStatus(204);
    } else {
      res.sendStatus(202);
    }
  });
};

module.exports = {
  addPim,
  findPim,
  editPim,
  deletePim,
};
