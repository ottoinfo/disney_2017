import {
  createAction,
  createRequestAction,
  createRequestTypes,
} from '../utils';

// CONSTANTS
export const GET_VIDEOS = '@user/GET_VIDEOS';
export const GET_VIDEOS_API = createRequestTypes('@user/GET_VIDEOS_API');
export const constants = {
  GET_VIDEOS,
  GET_VIDEOS_API,
};

// ACTIONS
export const getVideos = createAction(GET_VIDEOS);
export const getVideosApi = createRequestAction(GET_VIDEOS_API);
export default {
  getVideos,
  getVideosApi,
};
