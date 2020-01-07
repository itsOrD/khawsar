import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import $ from 'jquery';
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      phoneNumber: '',
      message: '',
    }
  }

  render() {
    const { message, phoneNumber } = this.state;
    return (
      <Card style={{ margin: 5 }}>
        <CardHeader title="Text your friends for help!" />
        <CardContent>
          <TextField
            id="message"
            value={message}
            label={'Copy/paste the Pokémon here!'}
            multiline
            rows="4"
          />
          <Input
            id="phoneNumber"
            value={phoneNumber}
            label="Send to what #?"
            style={{ marginTop: 40, marginLeft: 10 }}
          />
        </CardContent>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: 10 }}
          type="submit"
          form="searchForm"
        >
          Text it!
        </Button>
      </Card>
    )
  }
};

export default Message;
