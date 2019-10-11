import React from 'react';
import styles from './footer.css';
import {Link} from 'react-router-dom'; 

import {CURRENT_YEAR} from '../../config';
const Footer = () => (
    <div className={styles.footer}>
      <Link to="/" className={styles.logo}>
      <img alt="nbs logo" src="/images/nba_logo.png"/> 
      </Link>
      <div className={styles.right}>
        @NBA {CURRENT_YEAR} All right reversed
      </div>
    </div> 
  )

export default Footer;