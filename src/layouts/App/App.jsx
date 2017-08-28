import React, { PropTypes } from 'react';
import Header from '_views/Header';
import VideoAsset from '_components/VideoAsset';
import styles from './App.scss';

const App = ({ history, title, children, items, handleToggleVideo }) => {
  return (
    <div className={styles.App}>
      <Header history={history} title={title} />
      {children}

      {items.map((video) => (
        <VideoAsset key={video.slug} video={video} handleToggleVideo={handleToggleVideo} />
      ))}
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string,
  history: PropTypes.object,
  children: PropTypes.element.isRequired,
  items: PropTypes.array,
  handleToggleVideo: PropTypes.func,
};

export default App;
