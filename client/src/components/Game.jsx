import React from 'react';
import $ from 'jquery';
import Guess from './Guess.jsx';
import Record from './Record.jsx';
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

class Game extends React.Component {
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
    this.wildPokemon = this.wildPokemon.bind(this);
    this.compare = this.compare.bind(this);
  }

  compare() {
    if (this.state.whoThat === this.state.userGuess) {
      this.setState({
        userCorrect: true
      })
    }
  }

  wildPokemon(data) {
    console.log('data on client side: ', data)
    this.setState({
      pokeData: data,
      whoThat: data.name,
      pokeImg: data.sprites.front_shiny
    }, () => {
      console.log(`whoThat?  Why its... ${this.state.whoThat}! ${this.state.pokeImg}`)
      this.compare();
    })
  }

  componentDidMount() {
    let randNum = Math.floor(Math.random() * 807);
    console.log('randNum: ', randNum);
    this.pokedexCheck(randNum);
  }

  oops() {
    alert(`Please try again. Professor Oak hasn't added that Pokémon to the Pokédex yet it would seem...`)
  }

  pokedexCheck(mysteryPokemon) {
    $.ajax({
      type: "GET",
      url: `/api/find/${mysteryPokemon}`,
      success: (data) => this.wildPokemon(data),
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
    console.log('userGuess: ', e.target.value)
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
          <Typography variant="h3">
            <CardHeader title="Who's that Pokémon?!"/>
          </Typography>
          <Grid container justify="center">
            <CardMedia image={pokeImg} style={{ height: 136, width: 111 }}>
              <source media="(min-width: 600px)" srcSet={pokeImg} />
            </CardMedia>
          </Grid>
          <CardContent>
            <form id="searchForm" onSubmit={handleSubmit}>
              <TextField 
                id="pokeSearch"
                value={pokeSearch}
                label="pokeStart here!"
                type="search"
                variant="outlined"
                helperText={`Maybe its... ${randomPokemon}?`}
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
        <Record />
      </div>
    )
  }
};

export default Game;
