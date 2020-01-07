import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';

const DefeatedPokemon = (props) => {
  const { pokemon } = props;
  return (
    <div>
    <CardMedia 
    id={pokemon._id} 
    image={pokemon.image} 
    style={{ height: 136, width: 111 }}>
    test
      {console.log('hi from the inside: ', pokemon)}
    </CardMedia>
    </div>
  );
};

export default DefeatedPokemon;
