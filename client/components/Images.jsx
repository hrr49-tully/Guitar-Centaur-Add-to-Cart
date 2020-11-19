import React from 'react';


class Images extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="images">
        <img src={this.props.img1} onClick={this.props.click}/>
        <img src={this.props.img2} onClick={this.props.click}/>
        <img src={this.props.img3} onClick={this.props.click}/>
        <img src={this.props.img4} onClick={this.props.click}/>
      </div>
    )
  }
}

export default Images;