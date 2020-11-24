import React from 'react';
import styles from '../css/Extra.module.css';

class Extra extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
    <>
      <span className={styles.fourthfree}> Buy 3 lessons and get the fourth free! </span>
      <div className={styles.whylessons}>
        <a href=""> Why Guitar Centaur Lessons? </a>
      </div>

    </>
    );
  }
}

export default Extra;