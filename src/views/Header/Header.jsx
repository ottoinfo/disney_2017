import React, { PropTypes } from 'react';
import styles from './Header.scss';

const Header = ({ title, history }) => (
  <div className={styles.Header}>
    <p className={styles.title}>{title}</p>
    <span className={styles.spacer} />
    <div className={styles.link} onClick={() => history.push('/app') }>App</div>
    <div className={styles.link} onClick={() => history.push('/not-found') }>Not Found</div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
  history: PropTypes.obj,
};

export default Header;
