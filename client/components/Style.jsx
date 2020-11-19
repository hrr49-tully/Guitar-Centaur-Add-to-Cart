import React from 'react';

class Style extends React.Component {

  constructor(props) {
    super(props);
    // console.log('style is ', this.props.style);
    // console.log('first letter is', this.props.style[0]);

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