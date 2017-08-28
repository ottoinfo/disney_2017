import { createStore, applyMiddleware, compose } from 'redux';
// import Immutable from 'immutable';
import { createLogger } from 'redux-logger'
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '_redux/reducers';

export default function(initialState:Object = {}) {
    const sagaMiddleware = createSagaMiddleware();

    const middleware = [
        sagaMiddleware,
        thunk,
        routerMiddleware(browserHistory)
    ];
    const enhancers = [];

    if (true) {
        middleware.push(
            createLogger()
        );

        const devToolsExtension = window.devToolsExtension;
        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension());
        }
    }

    const store = createStore(
      rootReducer, initialState,
      compose( applyMiddleware(...middleware), ...enhancers)
    );

    if (module.hot) {
        module.hot.accept('_redux/reducers', () => {
            const reducers = require('_redux/reducers').default;
            store.replaceReducer(reducers(store.asyncReducers));
        });
    }

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);
    return store;
}
