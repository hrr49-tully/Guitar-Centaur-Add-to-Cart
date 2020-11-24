import React from 'react';
import styles from '../css/Promos.module.css';

class Promos extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
    <>
    <ul className={styles.Promocontainer}>
      <li className={styles.headphoneswrapper}>
      <span className={styles.anchor}> <img className={styles.headphones} src={'https://img.flaticon.com/icons/png/512/27/27130.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF'}></img> </span>
        <a className={styles.actual} href=""> <span className={styles.protect}> Protect Your Gear </span> </a>
      </li>
      <li className={styles.sometext}>
        <img className={styles.shipping} src={'https://image.flaticon.com/icons/png/512/44/44266.png'}></img>
        <a className={styles.actual} href=""> <span className={styles.free}> Free Shipping </span>  </a>
      </li>
      <li className={styles.international}>
        <img className={styles.internationalicon} src={'https://image.flaticon.com/icons/png/128/558/558593.png'}></img>
         <a className={styles.actual} href="" > <span className={styles.intshipping}> International Shipping </span> </a>
        </li>
      </ul>
      <div >
        <img className={styles.rogue}src={'https://static.guitarcenter.com/derivates/20/002/1/DV030_Jpg_BrandLogo_1000_rogue.jpg'}></img>
      </div>
      </>
    );
  }
}

export default Promos;