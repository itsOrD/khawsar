import React from 'react';
import $ from 'jquery';
import Guess from './Guess.jsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { purple } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

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
      pokeData: '',
      userGuessed: false,
      userGuess: '',
      userCorrect: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.pokedexCheck = this.pokedexCheck.bind(this);
    this.oops = this.oops.bind(this);
    this.wildPokemonAppeared = this.wildPokemonAppeared.bind(this);
  }

  wildPokemonAppeared(data) {
    console.log('data on client side: ', data)
    this.setState({
      pokeData: data,
      whoThat: data.name,
      pokeImg: data.sprites.front_shiny
    }, () => console.log(`whoThat?  Why its... ${this.state.whoThat.name}! ${this.state.pokeImg}`))
  }

  // componentDidMount() {
  //   this.wildPokemonAppeared(Math.floor(Math.random() * 807));
  // }

  oops() {
    alert(`Please try again. Professor Oak has added that Pokémon to the Pokédex yet it would seem...`)
  }

  pokedexCheck(pokeCheck) {
    $.ajax({
      type: "GET",
      url: "/api/find",
      body: pokeCheck,
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
    this.setState({
      pokeSearch: '',
      userGuessed: true,
      userGuess: e.target.value,
    }, () => this.pokedexCheck(this.state.userGuess));
  };

  render() {
    const { randomPokemon, pokeSearch, whoThat, pokeImg, userCorrect, userGuess, userGuessed } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <Card>
          <CardHeader title="Who's that Pokémon?!" />
          <Grid container justify="center">
            <CardMedia image={pokeImg} style={{ height: 136, width: 111 }}></CardMedia>
          </Grid>
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
                Submit your guess!
              </Button>
            </form>
          </CardContent>
        </Card>
        <Guess userGuessed={userGuessed} userGuess={userGuess} userCorrect={userCorrect} />
      </div>
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
