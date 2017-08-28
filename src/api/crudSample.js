import { request } from '_redux/utils';
import config from '../config';

export function getImages() {
  return request(`${config.API_BASE_URI}/api/images`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.jwt,
    }
  }).then(([ body ]) => body);
}

export function createImage(image) {
  return request(`${config.API_BASE_URI}/api/images`, {
    method: 'POST',
    body: JSON.stringify(image),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.jwt,
    }
  }).then(([ body ]) => body);
}

export function updateImage(image) {
  return request(`${config.API_BASE_URI}/api/images/${image.id}`, {
    method: 'PUT',
    body: JSON.stringify(image),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.jwt,
    }
  }).then(([ body ]) => body);
}

export function deleteImage(image) {
  return request(`${config.API_BASE_URI}/api/images/${image.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.jwt,
    }
  }).then(([ body ]) => body);
}
