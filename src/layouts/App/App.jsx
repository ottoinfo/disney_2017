import React, { PropTypes } from 'react';
import Header from '_views/Header';
import VideoAsset from '_components/VideoAsset';
import styles from './App.scss';

const App = ({ history, title, children, items, selectVideo, selected }) => {
  return (
    <div className={styles.App}>
      <Header history={history} title={title} />

      <div className={styles.content}>
        {items.map((video) => (
          <VideoAsset key={video.slug} video={video} handleSelectVideo={selectVideo} isSelected={selected[video.slug]} />
        ))}
      </div>
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
