import React, { PropTypes } from 'react';
import VideoAsset from '_components/VideoAsset';
import styles from './MovieDetails.scss';

const MovieDetails = ({ history, video, selectVideo, selected }) => {
  return (
    <VideoAsset 
        video={video}
        handleSelectVideo={selectVideo}
        isSelected={selected[video.slug]}
        viewDetails={false}
        history={history}
      />
  );
};

MovieDetails.propTypes = {
  video: PropTypes.object,
  selectVideo: PropTypes.func,
};

export default MovieDetails;
