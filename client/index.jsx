import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AddToCart from './components/addToCart.jsx';
import Description from './components/Description.jsx';
import Questions from './components/Questions.jsx';
import styles from './css/index.module.css';

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
      <div className={styles.container}>
          <AddToCart description={this.state.description}prices={this.state.price} questions={Questions}/>
      </div>

      </>
    );
  }
}

<<<<<<< HEAD
ReactDOM.render(<App />, document.getElementById('service3'));
=======
ReactDOM.render(<App />, document.getElementById('ATC'));
>>>>>>> ae66c4d49898530a34359d8177625528554a8c10
