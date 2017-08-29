import { createSelector } from 'reselect';
import { Map, List, OrderedSet } from 'immutable';

export const getVideos = (state) => state.video.get('items');
export const getSelected = (state) => state.video.get('selected');
export const getSlug = (state) => state.video.get('slug');
export const getSearch = (state) => state.video.get('search');

export const getCurrentVideo = createSelector(
  [ getVideos, getSlug ],
  (videos, slug) => Map(videos.filter((video) => video.get('slug') === slug).first()).toJS()
);

export const getSelectedSize = createSelector(
    [ getSelected ],
    ( selected ) => Object.key(selected).filter((asset) => selected.get(asset.get('id')))
);

export const searchVideos = createSelector(
  [ getVideos, getSearch ],
  (videos, search) => {
    if (!search.trim().length){
      return videos.toJS();
    } else {
      const words = search.trim().split(/[ ,]+/)
      let regExpString = '';
      words.map((word) => regExpString += `(?=.*${word})` );
      const regEx = new RegExp(regExpString, 'i');
      return videos.filter((video) => video.get('title').match(regEx)).toJS()
    }
  }
);