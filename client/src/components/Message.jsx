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
import Grid from '@material-ui/core/Grid';
import TextsmsTwoToneIcon from '@material-ui/icons/TextsmsTwoTone';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      phoneNumber: '',
      message: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendMsg = this.sendMsg.bind(this);
  }

  sendMsg(phNum, msg) {
    $.ajax({
      type: "POST",
      url: "/sms",
      data: { phNum, msg },
      success: () => console.log('msg sent'),
      failure: (err) => console.log('Error sending message: ', err)
    })
  }

  handleChange(e) {
    let name = e.target.id;
    let updateVal = e.target.value; 
    this.setState({
      [name]: updateVal
    }, () => console.log(name, updateVal))
  }

  handleSubmit(e) {
    e.preventDefault();
    this.sendMsg(this.state.phoneNumber, this.state.message);
    this.setState({
      phoneNumber: '',
      message: ''
    })
  }

  render() {
    const { message, phoneNumber } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <Card style={{ margin: 5 }}>
        <Typography variant="h3">
          <CardHeader title="Text your friends for help!" />
        </Typography>
        <CardContent>
          <form id="msgForm" onSubmit={handleSubmit}>
            <TextField
              id="message"
              value={message}
              label={'Copy/paste the Pokémon here!'}
              multiline
              rows="4"
              onChange={handleChange}
            />
            <TextsmsTwoToneIcon style={{ marginTop: 21 }} />
            <TextField
              id="phoneNumber"
              value={phoneNumber}
              label=" What's their 📞#?"
              style={{ marginLeft: 5 }}
              type="number"
              onChange={handleChange}
            />
          </form>
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
