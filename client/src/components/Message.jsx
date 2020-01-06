import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: false
    }
  }

  render() {
    //
    return (
      <div>
        Message box goes here
      </div>
    )
  }
};

export default Message;
