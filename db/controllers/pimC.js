const Pim = require('../models/pim.js');

const addPim = (data) => {
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

const findPim = (data) => {
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

const editPim = (data) => {
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

const deletePim = (data) => {
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
