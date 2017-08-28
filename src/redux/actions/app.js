import { createAction } from '_redux/utils';

// CONSTANTS
export const UPDATE = '@app/UPDATE';
export const SHOW_MENU = '@app/SHOW_MENU';

export const constants = {
  UPDATE,
  SHOW_MENU,
};

// ACTIONS
export const update = createAction(UPDATE);
export const showMenu = createAction(SHOW_MENU);

export default {
  update,
  showMenu,
};
