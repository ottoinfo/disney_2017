import React, { PropTypes } from 'react';
import styles from './VideoAsset.scss';

function formatDate(time) {
  if (!time) {
    return '--';
  }
  const months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const date = new Date(time)
  return months[date.getMonth()]  + " " + date.getDate() +  ", " + date.getFullYear()
}

function formatDuration(time) {
  if (!time) {
    return '--';
  }
  const date = new Date(null)
  date.setSeconds(time)
  const array = date.toISOString().substr(11, 8).split(":")
  return `${parseInt(array[0])} hours ${array[1]} minutes`
}

const VideoAsset = ({ video, handleToggleVideo}) => (
  <div className={styles.VideoAsset}>
    <img src={video.image} alt={video.title} className={styles.img} />

    <div className={styles.info}>
      <div className={styles.top}>
        <p className={styles.title}>{video.title}</p>
        <div className={styles.rating}>{(video.rating || '').toUpperCase()}</div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.add}>Add to Watchlist</div>

        <div className={styles.meta}>
          <p>Release Date: {formatDate(video.date)}</p>
          <p>Run Time: {formatDuration(video.run_time)}</p>
        </div>
      </div>
    </div>
  </div>
);

VideoAsset.propTypes = {
  video: PropTypes.object,
  handleToggleVideo: PropTypes.func,
};

export default VideoAsset;
