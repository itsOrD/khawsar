const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 80;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public/dist'))

//crud route references...

app.listen(PORT, () => 
	console.log('KHAWSAR listening on PORT: ', PORT)
);
