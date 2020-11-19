import React from 'react';
import axios from 'axios';
import Inventory from './Inventory.jsx';
import Button from './Button.jsx';
import Message from './Message.jsx';
import Style from './Style.jsx';
import Price from './Price.jsx';
import Questions from './Questions.jsx';
import Financing from './Financing.jsx';
import Images from './Images.jsx';
import AddToList from './AddToList.jsx';

class AddToCart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      image1: [],
      image2: [],
      image3: [],
      image4: [],
      style: 'Black',
      message: 'In Stock',
      status: 'Add to Cart',
      inventory: 'Most orders placed before noon ET ship same day (except weekends and holidays).'
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFirst = this.handleFirst.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover (e) {
    axios.get('/api/styles')
      .then(response => {
        var hover = e.target.src.toString();
        for(var i = 0; i < response.data.length; i++) {
          if(response.data[i].image_url === hover) {
            var newstyle = response.data[i].style;
          }
        }
        this.setState({
          style: newstyle
        });
      })
      .catch(err => {
        console.log('we have an error from your hover method ', err);
      });
      e.persist();
  }

  handleFirst (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  handleClick (e) {
    axios.get('/api/styles')
      .then(response => {
        var clicked = e.target.src.toString();
        for(var i = 0; i < response.data.length; i++) {
          if(response.data[i].image_url === clicked) {
            var newquantity = response.data[i].quantity;
          }
        }
        if(newquantity === 0) {
          this.setState({
            status: 'Reserve Now',
            message: 'Order now!',
            inventory: 'This item is backordered but is available to reserve now. You will not be charged until the item ships. Email me when this is in stock.'
          });
        } else {
          this.setState({
            status: 'Add to Cart',
            message: 'In Stock',
            inventory: 'Most orders placed before noon ET ship same day (except weekends and holidays).'
          });
        }
      })
      .catch(err => {
        console.log('could not retrieve style');
      });
      e.persist();
  }

  componentDidMount () {
    axios.get('/api/styles')
      .then(response => {
        this.setState({
          image1: response.data[0].image_url,
          image2: response.data[1].image_url,
          image3: response.data[2].image_url,
          image4: response.data[6].image_url
        });
      })
      .catch(err => {
        console.log('received an error from get request in ATC', err);
      });
  }
  render () {
    return (
      <>
    <div className="styleandimage">
      <div className="styles">
        <Style style={this.handleFirst(this.state.style)}  />
      </div>
      <div className="img-container">
          <Images img1={this.state.image1} img2={this.state.image2} img3={this.state.image3} img4={this.state.image4} hover={this.handleHover} click={this.handleClick} />
        </div>
    </div>


    <div className="addtocart">
        <AddToList />
        <Price price={this.props.prices}/>
        <Financing />
        <Message themessage={this.state.message}/>
        <Button other={this.state.message} button={this.state.status}/>
        <Inventory inventory={this.state.inventory}/>
        <Questions questions={this.props.questions}/>
      </div>
      </>
    );
  }
}

export default AddToCart;