import { createSelector } from 'reselect';
import { Map } from 'immutable';

export const getAttr = (state) => state.ATTR.get('item');

export const getAttrs = createSelector(
  [ getAttr ],
  (attrs = Map()) =>  attrs.get('id'))
);