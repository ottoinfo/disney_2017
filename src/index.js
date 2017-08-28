import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import createStore from '_redux/store/createStore';
import Root from '_containers/Root';
import rootSaga from '_redux/sagas';
import { desktop, mobile } from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

const initialState = {};
const store = createStore(initialState);
const history = syncHistoryWithStore(createBrowserHistory(), store);
store.runSaga(rootSaga);

injectTapEventPlugin();

const ROOT_NODE = document.getElementById('root');

let render = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const routes =  isMobile ? mobile : desktop;
    ROOT_NODE.className = `${ isMobile ? 'mobile' : 'desktop' }-view`;
    ReactDOM.render(<Root store={store} history={history} routes={routes} />, ROOT_NODE);
};

render();
