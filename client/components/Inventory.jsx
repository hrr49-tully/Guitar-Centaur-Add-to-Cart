import React from 'react';

class Inventory extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="inventorywrapper">
        <div className="inventory">{this.props.inventory}</div>
      </div>

    );
  }
}

export default Inventory;