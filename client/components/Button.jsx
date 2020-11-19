import React from 'react';

class Button extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input
          className="sub-button"
          type="submit"
          value={this.props.button} >
        </input>
        <input
          className="subnumber"
          type="number"
          min="1"
          max="100"
          placeholder="1"
        >
        </input>
      </form>
    );
  }
}

export default Button;