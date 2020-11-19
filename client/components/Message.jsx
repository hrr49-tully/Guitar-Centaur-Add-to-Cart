import React from 'react';

class Message extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="messagewrapper">
         <span className="message"> {this.props.themessage} </span>
      </div>

    );
  }
}

export default Message;