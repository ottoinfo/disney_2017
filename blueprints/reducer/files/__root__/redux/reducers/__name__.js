import { fromJS } from 'immutable';
import { createReducer } from '../utils';

export const initialState = fromJS({});

export default createReducer(initialState, {
  // [CONSTANT]: (state, action) => state,
  // [SET]: (state, { payload: attr }) => (
  //   state.set('attr', attr)
  // ),
  // [SET_IN](state, { payload: attr }) => (
  //   state.setIn(
  //     [ 'selected', attr ],
  //     !state.getIn( [ 'selected', attr ])
  //   )
  // ),
  // [MERGE_IN]: (state, { payload: attr }) => (
  //   state.mergeIn([ 'selected' ], attr)
  // ),

});
