import {
  createAction,
  createRequestAction,
  createRequestTypes,
} from '../utils';

// CONSTANTS
export const GET_VIDEOS = '@user/GET_VIDEOS';
export const GET_VIDEOS_API = createRequestTypes('@user/GET_VIDEOS_API');
export const SELECT_VIDEO = '@user/SELECT_VIDEO';
export const SET_SLUG = '@user/SET_SLUG';
export const SET_SEARCH = '@user/SET_SEARCH';
export const CLEAR_SEARCH = '@user/CLEAR_SEARCH';
export const constants = {
  GET_VIDEOS,
  GET_VIDEOS_API,
  SELECT_VIDEO,
  SET_SLUG,
  SET_SEARCH,
  CLEAR_SEARCH,
};

// ACTIONS
export const getVideos = createAction(GET_VIDEOS);
export const getVideosApi = createRequestAction(GET_VIDEOS_API);
export const selectVideo = createAction(SELECT_VIDEO);
export const setSlug = createAction(SET_SLUG);
export const setSearch = createAction(SET_SEARCH);
export const clearSearch = createAction(CLEAR_SEARCH);
export default {
  getVideos,
  getVideosApi,
  selectVideo,
  setSlug,
  setSearch,
  clearSearch,
};
