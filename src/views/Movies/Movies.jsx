import React, { PropTypes } from 'react';
import Search from '_components/Search';
import VideoAsset from '_components/VideoAsset';
import styles from './Movies.scss';

const Movies = ({ history, search, searchVideos, selectVideo, selected, setSearch, clearSearch }) => {
  return (
    <div className={styles.Movies}>
      <Search search={search} setSearch={setSearch} clearSearch={clearSearch} />

      {searchVideos.map((video) => (
        <VideoAsset 
          key={video.slug}
          video={video}
          handleSelectVideo={selectVideo}
          isSelected={selected[video.slug]}
          viewDetails={true}
          history={history}
        />
      ))}
    </div>
  );
};

Movies.propTypes = {
  title: PropTypes.string,
  history: PropTypes.object,
  searchVideos: PropTypes.array,
  handleToggleVideo: PropTypes.func,
  setSearch: PropTypes.func, 
  clearSearch: PropTypes.func,
};

export default Movies;
