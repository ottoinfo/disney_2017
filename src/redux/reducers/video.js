import { createReducer } from '../utils';
import { fromJS, List, Map } from 'immutable';
import * as actions from '_redux/actions/video';
export const initialState = fromJS({
    isLoading: false,
    error: null,
    items: [],
    selected: {},
});

export default createReducer(initialState, {
    [actions.GET_VIDEOS_API.START]: (state) => (
        state
            .set('isLoading', true)
    ),
    [actions.GET_VIDEOS_API.SUCCESS]: (state, { payload }) => (
        state
            .mergeIn(['items'], payload.items)
    ),
    [actions.GET_VIDEOS_API.FAILURE]: (state, { payload }) => (
        state
            .set('isLoading', false)
    ),
    [actions.SELECT_VIDEO]: (state, { payload: videoSlug }) => (
        state.setIn(
            [ 'selected', videoSlug ],
            !state.getIn( [ 'selected', videoSlug ])
        )
    )
});