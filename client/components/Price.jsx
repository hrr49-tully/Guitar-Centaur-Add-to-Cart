import React from 'react';

class Price extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
    <div className="pricewrapper">
      <div className="product-price"> ${this.props.price} </div>
      <div className="freeshipping"> +Free Shipping </div>
    </div>
    );
  }
}

export default Price;