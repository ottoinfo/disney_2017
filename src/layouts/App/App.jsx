import React, { PropTypes } from 'react';
import Header from '_views/Header';
import VideoAsset from '_components/VideoAsset';
import styles from './App.scss';

const App = ({ history, title, children, selectedItems}) => {
  return (
    <div className={styles.App}>
      <Header history={history} title={title} selectedItems={selectedItems} />
      
      <div className={styles.content}>
        { children }
      </div>
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string,
  history: PropTypes.object,
  children: PropTypes.element.isRequired,
  selectedItems: PropTypes.number,
};

export default App;
