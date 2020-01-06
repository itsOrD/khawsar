import React from 'react';
import Title from './Title.jsx';
import Message from './Message.jsx';
import Search from './Search.jsx';
import Button from '@material-ui/core/Button';

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
        <Title />
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
