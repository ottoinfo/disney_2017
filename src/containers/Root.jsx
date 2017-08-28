import React, { PureComponent, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

export class Root extends PureComponent {

  render() {
    const {
      store,
      history,
      routes,
    } = this.props;

    return (
      <Provider store={store}>
        <Router history={history}>
          {routes}
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {};

export default Root;