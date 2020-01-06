const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../db/controllers/pimC.js');

const app = express();
const PORT = 80;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'))

// crud route references
// CREATE
app.route('/pim/create', controller.addPim);

// READ
app.route('/pim/read', controller.findPim);

// UPDATE
app.route('/pim/update', controller.editPim);

// DELETE
app.route('pim/delete', controller.deletePim);

app.listen(PORT, () => 
	console.log('KHAWSAR listening on PORT: ', PORT)
);
