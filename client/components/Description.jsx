import React from 'react';
import styles from '../css/Description.module.css';

class Description extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="descriptionwrapper">
      <div className="product-description"> Product Description: </div>
      <div className="description"> {this.props.description}
      </div>
    </div>
    );
  }
}

export default Description;