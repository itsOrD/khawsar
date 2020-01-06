import React from 'react';
import Title from './Title.jsx';
import Message from './Message.jsx';
import Search from './Search.jsx';
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
      placeholder: '',
    }
  //this...
  }

  //methods...

  render() {
    
    return (
      <div>
        <Title  theme={theme} />
        <Message />
        <Search />
        <Button variant="contained" color="primary">
          Search for a Pokémon!
        </Button>
      </div>
    )
  }
};

export default App;
