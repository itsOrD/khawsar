const axios = require('axios');

const search = (req, res) => {
  // console.log('REQ.BODY: ', req)
	// axios({
  //   type: "GET",
  //   url: `https://pokeapi.co/api/v2/pokemon-form/${req.body}`,
  //   success: () => res.send(data),
  //   failure: () => res.sendStatus(404)
  // })
  console.log('incoming request ---> ', req)
  axios.get(`https://pokeapi.co/api/v2/pokemon-form/`)
    .then((res) => {
      console.log(res.data);
      let foundPokemon = res.data;
      return foundPokemon;
    })
    .then(foundPokemon => res.send(foundPokemon))
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    })
  
  
  // , (req, res) => {
  //   console.log('.......')
  //   if (err) {
  //     console.log(err);
  //     res.sendStatus(404);
  //   } else {
  //     console.log(data);
  //     res.send(data);
  //   }
  // })
    // .then(data => res.json(data))
    // .then((data) => res.send(data))
    // .catch((data, err) => console.log(data, err))
}

module.exports = {
	search,
};
