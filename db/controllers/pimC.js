const Model = require('../models/pim.js');

const addPim = (req, res) => {
  let info = req.body;
  let p = new Model.Pim({ name: info.name, image: info.sprites.front_shiny })
  p.save((err, data) => {
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
  Model.Pim.find({}, (err, data) => {
    if (err) {
      console.error(err);
      // next(err);
      res.sendStatus(404);
    } else {
      console.log('DATA: ', data)
      res.send(data);
    }
  });
};

const editPim = (req, res) => {
  let info = req.body;
  let p = new Model.Pim({ name: info.name })
  p.findOneAndUpdate({}, /* update, */ (err) => {
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
  let info = req.body._id;
  Pim.deleteOne(info, (err) => {
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
