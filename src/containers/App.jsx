import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import AppLayout from '_layouts/App';
import { getVideos, selectVideo } from '_redux/actions/video';

export class App extends PureComponent {

  render() {
    const { props } = this;
    return (
      <AppLayout {...props} />
    );
  }
}

App.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
