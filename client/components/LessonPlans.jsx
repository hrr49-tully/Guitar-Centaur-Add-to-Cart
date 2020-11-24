import React from 'react';
import styles from '../css/LessonPlans.module.css';

class LessonPlans extends React.Component {

  constructor (props) {
    super(props);

  }

  render () {
    return (
      <div className={styles.lessonplan}>
        <div className={styles.lesson60}>
          <button className={styles.lessonsplanbutton}>
            <div> Add four 60 minute lessons </div>
            <div className={styles.lesson}> {this.props.sixty} </div>
          </button>
        </div>
        <div className={styles.lesson30}>
          <button className={styles.lessonsplanbutton}>
            <div> Add four 30 minute lessons </div>
            <div className={styles.lesson}> {this.props.thirty} </div>
          </button>
        </div>
        <div className={styles.nothanks}>
          <button className={styles.lessonsplanbutton}>
            No thanks
          </button>
        </div>
      </div>
    )
  }

}

export default LessonPlans;