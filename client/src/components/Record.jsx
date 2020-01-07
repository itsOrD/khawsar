import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DefeatedPokemon from './DefeatedPokemon.jsx';

const Record = (props) => {
  const { correctGuesses } = props;
  return (
    <Card>
      {console.log('correctGuesses: ', correctGuesses )}
      <Typography variant="h3">
        <CardHeader title="Correct guess record: " />
      </Typography>
      <CardContent>

      </CardContent>
    </Card>
  );
};

export default Record;

        // {correctGuesses.forEach((pokemon, i) => {
        //   return <div>{pokemon.name}</div>
        //   return <DefeatedPokemon pokemon={pokemon} /> 
        // })}