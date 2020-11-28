import React from 'react';
import styles from '../css/LessonPlans.module.css';
import LessonPopup from './LessonPopup.jsx';

class LessonPlans extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      lessonPop: false
    }
    this.handlePop = this.handlePop.bind(this);
  }

  handlePop (e) {
    this.setState({
      lessonPop: !this.state.lessonPop
    });
    console.log('lessonpop is ', this.state.lessonPop);
  }

  render () {
    return (
      <div className={styles.lessonplan}>
        <div className={styles.lesson60}>
          <button className={styles.lessonsplanbutton} onClick={this.handlePop} >
            <div> Add four 60 minute lessons </div>
            <div className={styles.lesson}> {this.props.sixty}
            </div>
          </button>
          {this.state.lessonPop ? <LessonPopup closePopup={this.handlePop.bind(this)}/>:null }
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