import React from 'react';
import styles from '../css/Images.module.css';
import Images from './Images.jsx';
import axios from 'axios';

class ImageList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      style: ''
    }
  }

  render () {
    return (
      <img
        onClick = {this.props.click}
        onMouseOver = {this.props.hover}
        className={styles.image}
        src={this.props.imageURL}>
      </img>
    );
  }
}

export default ImageList;