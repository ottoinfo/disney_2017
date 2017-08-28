import { call, put, select, fork } from 'redux-saga/effects';
import { takeLatest, delay } from 'redux-saga';
import actions, { constants } from '_redux/actions/video';
import * as api from '_api/video';

export function* getVideos() {
    yield put(actions.getVideosApi.start());

    try {
        const response = yield call(api.getVideos);
        yield put(actions.getVideosApi.success(response));
    } catch (err) {
        yield put(actions.getVideosApi.failure({ message: err.body.message }));
    }
}

export default function* watchVideo() {
    yield [
        takeLatest(constants.GET_VIDEOS, getVideos),
    ];
}