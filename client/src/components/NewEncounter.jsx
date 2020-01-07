import React from 'react';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import SyncProblemIcon from '@material-ui/icons/SyncProblem';

const NewEncounter = (props) => {
  const { randomEncounter, encounters } = props;

  const tallGrass = () => {
    // encounters++;
    randomEncounter();
  };

  return (
    <Badge 
      badgeContent={encounters}
      color={"secondary"} 
      fullWidth
      style={{ marginLeft: 80, marginTop: 40 }}
    >
      <Button 
        variant={"outlined"}
        color={"secondary"}
        onClick={tallGrass}
        style={{ height: 40, width: 40 }}
      >
        <SyncProblemIcon />
        New encounter
        <SyncProblemIcon />
      </Button>
    </Badge>
  );
};

export default NewEncounter;
