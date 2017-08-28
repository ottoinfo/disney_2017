import { createReducer } from '_redux/utils';
import { fromJS } from 'immutable';
import { UPDATE, SHOW_MENU } from '_redux/actions/app';

type AppState = {
  isLoading: Boolean,
  platform: String,
  showMenu: Boolean,
};

export const initialState: AppState = fromJS({
  isLoading: false,
  platform: 'desktop',
  showMenu: false,
});

export default createReducer(initialState, {
  [UPDATE]: (state, { payload }): AppState => (
    state.merge(payload)
  ),
  [SHOW_MENU]: (state, { payload }): AppState => (
    state.set('showMenu', payload)
  )
});
