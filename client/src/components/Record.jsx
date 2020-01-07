import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Record = (props) => {
  // const { userGuess } = props;
  return (
    <Card>
      <Typography variant="h3">
        <CardHeader title="Guess record: " />
      </Typography>

    </Card>
  );
};

export default Record;
