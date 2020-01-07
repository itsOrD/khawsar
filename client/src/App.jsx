import React from 'react';
import Title from './components/Title.jsx';
import Message from './components/Message.jsx';
import Game from './components/Game.jsx';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange,
  },
  status: {
    danger: 'purple',
  },
});

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      encounters: 1,
    }
  }

  render() {
    const { encounters } = this.state;
    return (
      <div>
        <Title />
        <Game />
        <Message />
      </div>
    )
  }
};

export default App;
