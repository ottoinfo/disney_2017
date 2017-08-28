import React, { PropTypes } from 'react';
import Header from '_views/Header';
import styles from './App.scss';

const App = ({ history, title, children, items }) => {
  return (
    <div className={styles.App}>
      <Header history={history} title={title} />
      {children}

      {items.map((video) => (
        <div key={video.slug}>
          <img src={video.image} />
          <p>{video.title}<span onClick={()=> handleUpdateImage(video)}>Update</span></p>
        </div>
      ))}
      {items.length}
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string,
  history: PropTypes.object,
  children: PropTypes.element.isRequired,
};

export default App;
