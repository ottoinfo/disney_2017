import { fork } from 'redux-saga/effects';
import watchApp from './app';

export default function* rootSaga() {
  yield [
    fork(watchApp),
  ];
}
