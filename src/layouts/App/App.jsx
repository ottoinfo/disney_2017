import React, { PropTypes } from 'react';
import Header from '_views/Header';
import styles from './App.scss';

const App = ({ history, title, children }) => {
  return (
    <div className={styles.App}>
      <Header history={history} title={title} />
      {children}
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string,
  history: PropTypes.object,
  children: PropTypes.element.isRequired,
};

export default App;
