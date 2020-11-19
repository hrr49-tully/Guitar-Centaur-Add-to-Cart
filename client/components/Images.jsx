import React from 'react';

class Images extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="images">
        <img src={this.props.img1} onClick={this.props.click} onMouseOver={this.props.hover}/>
        <img src={this.props.img2} onClick={this.props.click} onMouseOver={this.props.hover}/>
        <img src={this.props.img3} onClick={this.props.click} onMouseOver={this.props.hover}/>
        <img src={this.props.img4} onClick={this.props.click} onMouseOver={this.props.hover}/>
      </div>
    )
  }
}

export default Images;