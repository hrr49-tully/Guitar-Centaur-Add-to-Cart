import React from 'react';
import styles from '../css/Images.module.css';

class Images extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="images">
        <img className={styles.image} src={this.props.img1} onClick={this.props.click} onMouseOver={this.props.hover}/>
        <img className={styles.image} src={this.props.img2} onClick={this.props.click} onMouseOver={this.props.hover}/>
        <img className={styles.image} src={this.props.img3} onClick={this.props.click} onMouseOver={this.props.hover}/>
        <img className={styles.image} src={this.props.img4} onClick={this.props.click} onMouseOver={this.props.hover}/>
      </div>
    )
  }
}

export default Images;