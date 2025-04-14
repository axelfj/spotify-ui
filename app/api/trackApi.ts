import axios from 'axios';
import { BASE_URL, AUTH_HEADER } from './config';

export const createTrack = (isrc: string) => {
  return axios.post(
    `${BASE_URL}/metadata?isrc=${isrc}`,
    {},
    {
      headers: {
        Authorization: AUTH_HEADER,
      },
    }
  );
};

export const getTrackMetadata = (isrc: string) => {
  return axios.get(`${BASE_URL}/metadata?isrc=${isrc}`, {
    headers: {
      Authorization: AUTH_HEADER,
    },
  });
};

export const getCoverUrl = (isrc: string) => {
  return `${BASE_URL}/cover?isrc=${isrc}`;
};
