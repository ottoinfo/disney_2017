import { call, put, select, fork } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { normalize, schema } from 'normalizr';
import * as schemas from '../schemas';
import actions, { constants } from '_redux/actions/app';

export function* fetchAPI({ payload }) {
    yield put(actions.fetchAPI.start());

    const responseSchema = new schema.Object({});

    try {
        const response = yield call(api.fetchAPI, payload);
        const norm = yield call(normalize, response, responseSchema);
        yield put(actions.fetchAPI.success(norm));
    } catch (err) {
        yield put(actions.fetchAPI.failure(err));
    }
}

export default function* watch<%= pascalEntityName %>() {
  yield [
    takeLatest(constants.FETCH_API, fetchAPI),
  ];
}
