import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AddToCart from './components/addToCart.jsx';
import Description from './components/Description.jsx';
import Questions from './components/Questions.jsx';
import Style from './components/Style.jsx';

class App extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      results: [],
      description: '',
      price: ''
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount () {
    axios.get('/api/values')
      .then(response => {
        this.setState({
           results: response.data,
           description: response.data[0].description,
           price: response.data[0].price
        });
      });
  }

  render () {
    return (
      <>
         <Description description={this.state.description}/>

        <AddToCart prices={this.state.price} questions={Questions}/>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));