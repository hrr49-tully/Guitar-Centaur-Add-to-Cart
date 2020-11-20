import React from 'react';

class Style extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="stylewrapper">
        <div className="choosestyle"> Choose Style: </div>
        <div className="styletype"> {this.props.style}</div>
      </div>
    );
  }
}

export default Style;