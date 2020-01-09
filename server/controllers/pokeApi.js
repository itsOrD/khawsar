const axios = require('axios');

const search = (req, res) => {

  console.log('incoming request Pokemon number ---> ', req.params.mysteryPokemon);
  let pokeNum = req.params.mysteryPokemon;
  axios.get(`https://pokeapi.co/api/v2/pokemon-form/${pokeNum}`)
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
