import { call, put, select, fork } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import actions, { constants } from '_redux/actions/app';

export function* loadPresentation({ payload: presentationId }) {
    // const [ presentation, assets ] = yield [
    //     select(entitySelectors.getPresentationById, presentationId),
    //     select(entitySelectors.getAssets)
    // ];

    // if (presentation && assets.size) {
    //     return presentation;
    // }

    // yield put(actions.fetchPresentation.start());

    // const responseSchema = new schema.Object({
    //     assets: [ schemas.asset ],
    //     presentation: schemas.presentation
    // });

    // try {
    //     const response = yield call(api.getPresentation, presentationId);
    //     response.presentation.assets = response.assets && response.assets.map((asset) => asset.id);
    //     const norm = yield call(normalize, response, responseSchema);
    //     yield call(normalizeChildAssetCounts, norm);
    //     yield put(actions.fetchPresentation.success(norm));
    // } catch (err) {
    //     yield put(actions.fetchPresentation.failure(err));
    // }
}

export default function* watchApp() {
    yield [
        takeLatest(constants.UPDATE, loadPresentation),
    ];
}
