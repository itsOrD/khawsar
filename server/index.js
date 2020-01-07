const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../db/controllers/pimC.js');
const pokeApi = require('./controllers/pokeApi.js');

const app = express();
const PORT = 80;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

// crud route references
// CREATE
app.route('/pim/create')
	.post(controller.addPim);

// READ
app.route('/pim/read')
	.get(controller.findPim);

// UPDATE
app.route('/pim/update')
	.put(controller.editPim);

// DELETE
app.route('/pim/delete')
	.delete(controller.deletePim);

// api routes
app.route('/api/find/:mysteryPokemon')
	.get(pokeApi.search);

app.listen(PORT, () => 
	console.log('KHAWSAR listening on PORT: ', PORT)
);
