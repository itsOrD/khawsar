import React from 'react';
import $ from 'jquery';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { purple } from '@material-ui/core/colors';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: false,
      cleared: true,
      pokeSearch: '',
      randomPokemon: 'Charmander',
      whoThat: [],
      pokeImg: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.pokedex = this.pokedex.bind(this);
    this.oops = this.oops.bind(this);
    this.wildPokemonAppeared = this.wildPokemonAppeared.bind(this);
  }

  wildPokemonAppeared(data) {
    console.log('data on client side: ', data)
    this.setState({
      whoThat: data,
      pokeImg: data.sprites.front_shiny
    }, () => console.log(`whoThat?  Why its... ${this.state.whoThat.name}! ${this.state.pokeImg}`))
  }

  oops() {
    alert(`Please try again. Professor Oak has added that Pokémon to the Pokédex yet it would seem...`)
  }

  pokedex(pocketMonster) {
    $.ajax({
      type: "GET",
      url: "/api/find",
      body: pocketMonster,
      success: (data) => this.wildPokemonAppeared(data),
      failure: () => oops(),
    })
  }

  handleChange(e) {
    let userIn = e.target.value;
    this.setState({
      pokeSearch: userIn,
    }, () => console.log(this.state.pokeSearch));
  };

  handleSubmit(e) {
    e.preventDefault();
    const pokeReq = this.state.pokeSearch;
    console.log('before: ', pokeReq)
    this.setState({
      pokeSearch: '',
    }, () => this.pokedex());
  };

  render() {
    const { randomPokemon, pokeSearch, whoThat, pokeImg } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <Card>
        <CardHeader title="Who's that pokemon?!" />
        <div>
        <CardMedia image={pokeImg} style={{ height: 100, width: 100 }}></CardMedia>
        </div>
        <CardContent>
        <form id="searchForm" onSubmit={handleSubmit}>
          <TextField 
            id="pokeSearch"
            value={pokeSearch}
            label="pokeStart here!"
            type="search"
            variant="outlined"
            helperText={`How about... ${randomPokemon}?`}
            onChange={handleChange}
          />
            <Button 
              variant="contained"
              color="primary"
              style={{ marginTop: 10, marginLeft: 10 }}
              type="submit"
              form="searchForm"
            >
              Search for a Pokémon!
            </Button>
          </form>
        </CardContent>
      </Card>
    )
  }
};

export default Search;





  // {/* <Card style={{ textAlign: 'center', color: '#FF8C00' }}>
  //   <CardHeader
  //     title="Search and Send"
  //   >
  //   </CardHeader>
  //   <CardSubHeader>
  //     A Pokemon image sharing app
  //   </CardSubHeader>
  // </Card> */}
