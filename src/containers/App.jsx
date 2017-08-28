import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import AppLayout from '_layouts/App';
import { getVideos, selectVideo } from '_redux/actions/video';

export class App extends PureComponent {

  componentWillMount() {
    const { videos, getVideos } = this.props;
    if (!videos || !videos.length) {
      getVideos();
    }
  }

  render() {
    const { props } = this;

    if (!props.items.length) {
      return (<p>Loading</p>)
    }

    return (
      <AppLayout {...props} />
    );
  }
}

App.propTypes = {
  items: PropTypes.array,
  getVideos: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.video.toJS()
});

const mapDispatchToProps = {
  getVideos,
  selectVideo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
