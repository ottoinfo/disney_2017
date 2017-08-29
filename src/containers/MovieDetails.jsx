import React, { PureComponent, PropTypes } from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import MovieDetailsView from '_views/MovieDetails';
import { getVideos, selectVideo, setSlug } from '_redux/actions/video';
import { getCurrentVideo } from '_redux/selectors/video';


export class MovieDetails extends PureComponent {

  componentWillMount() {
    const { videos, getVideos, setSlug, match } = this.props;

    setSlug(match.params.slug);

    if (!videos || !videos.length) {
      getVideos();
    }
  }

  render() {
    const { props } = this;

    if (!props.items.length) {
      return (<p>Loading</p>)
    }

    if (!props.video) {
      return (<p>Unknown Video</p>)
    }

    return (
      <MovieDetailsView {...props} />
    );
  }
}

MovieDetails.propTypes = {
  items: PropTypes.array,
  getVideos: PropTypes.func.isRequired,
  video: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  ...state.video.toJS(),
  video: getCurrentVideo(state)
});

const mapDispatchToProps = {
  getVideos,
  selectVideo,
  setSlug,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);
