import { fork } from 'redux-saga/effects';
import watchApp from './app';
import watchVideo from './video';

export default function* rootSaga() {
  yield [
    fork(watchApp),
    fork(watchVideo),
  ];
}
