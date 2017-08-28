import React, { PropTypes } from 'react';
import styles from './App.scss';

const App = ({ items }) => (
  <div className={styles.App}>
    App
    {items}
  </div>
);

App.propTypes = {
  items: PropTypes.array,
};

export default App;
