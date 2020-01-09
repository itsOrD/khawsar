import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DefeatedPokemon from './DefeatedPokemon.jsx';
import Image from 'material-ui-image';
import $ from 'jquery';

const Record = (props) => {
  const { correctGuesses, mostRecentCorrect } = props;

  const highestIndex = correctGuesses.length - 1;
  // const correctGuess = correctGuesses[0].name
  const correctGuessStr = String(JSON.stringify(correctGuesses[highestIndex]));
  const mostRecentFront = correctGuessStr.slice(34);
  // const mostRecent = mostRecentFront.split(`","image`)
  
  const removeMR = () => {
    $.ajax({
      type: "DELETE",
      url: "pim/delete",
      body: `${_id}`,
      success: () => alert('Please refresh the page'),
      failure: () => alert('Uh oh, its not very effective!')
    })
  };

  const editMR =  () => {
    $.ajax({
      type: "PUT",
      url: "pim/update",
      body: `${_id}`,
      success: () => alert('Please refresh the page'),
      failure: () => alert('Uh oh, its not very effective!')
    })
  };

  return (
    <div>
      <Card>
        <Typography variant="h3">
          <CardHeader title="Most recent correct guess: " />
        </Typography>
        <CardContent>
          - - - 
          <div onClick={removeMR}
            style={{ fontFamily: 'roboto', color: 'red', cursor: 'pointer'}}
            id=""
          >
            {mostRecentFront}
          </div>
          <div id="" onClick={editMR}
            style={{ fontFamily: 'roboto', color: 'red', cursor: 'pointer'}}
          >
            - click here to edit - 
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Record;

        // {correctGuesses.forEach((pokemon, i) => {
        //   return <div>{pokemon.name}</div>
        //   return <DefeatedPokemon pokemon={pokemon} /> 
        // })}