import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const Guess = (props) => {
  const { userGuessed, userGuess, userCorrect } = props;
	return (
    <Card>
      {
        userGuessed ? (
          <Grid style={{ marginLeft: 10 }}>
            <TextField
              variant="outlined"
              color="primary"
              value={`Guess: '${userGuess}'`}
              style={{ margin: 10 }}
            />
            {
              userCorrect ? (
                <Button 
                  variant="contained"
                  color="primary"
                  style={{ margin: 10 }}
                >Correct!</Button>
              ) : (
                <Button 
                  variant="contained"
                  color="secondary"
                  style={{ marginTop: 20 }}
                >Try again!</Button>
              )
            }
          </Grid>
        ) : (
          <TextField
            variant="filled"
            color="secondary"
            value={`Fill out your guess...`}
            style={{ marginLeft: 20, marginBottom: 5, marginTop: 5 }}
          />
        )
      }
    </Card>
	)
};

export default Guess;
