import { request } from '_redux/utils';
import config from '../config';

export function getVideos() {
  return request(`${config.API_BASE_URI}/api/data.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(([ body ]) => body);
}