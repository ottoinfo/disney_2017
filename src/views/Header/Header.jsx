import React, { PropTypes } from 'react';
import styles from './Header.scss';

const Header = ({ title, history, selectedItems }) => (
  <div className={styles.Header}>
    <p className={styles.title}>{title}</p>
    <span className={styles.spacer} />
    {selectedItems &&
      <p>Selected Videos: { selectedItems || 0 }</p>
    }
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
  history: PropTypes.obj,
  selectedItems: PropTypes.number,
};

export default Header;
