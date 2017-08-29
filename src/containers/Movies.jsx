import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import MoviesView from '_views/Movies';
import { getVideos, selectVideo, setSearch, clearSearch } from '_redux/actions/video';
import { searchVideos } from '_redux/selectors/video';

export class Movies extends PureComponent {

  componentWillMount() {
    const { items, getVideos } = this.props;
    if (!items || !items.length) {
      getVideos();
    }
  }

  render() {
    const { props } = this;

    if (!props.items.length) {
      return (<p>Loading</p>)
    }

    // console.log('--------', props.searchVideos)

    return (
      <MoviesView {...props} />
    );
  }
}

Movies.propTypes = {
  items: PropTypes.array,
  getVideos: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.video.toJS(),
  searchVideos: searchVideos(state),
});

const mapDispatchToProps = {
  getVideos,
  selectVideo,
  setSearch,
  clearSearch,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
