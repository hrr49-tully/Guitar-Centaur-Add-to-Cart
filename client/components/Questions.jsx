import React from 'react';

class Questions extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="qwrapper">
      <div className="questions"> Have Questions? <img className="phone" src={'https://www.clker.com//cliparts/R/i/G/W/R/P/black-phone-hi.png'}/> 866-498-7882
      </div>
      <div className="experts">
      Call our experts for product info and phone-only specials.
      </div>
    </div>

    );
  }
}

export default Questions;