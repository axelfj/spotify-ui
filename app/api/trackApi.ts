import axios from 'axios';
import { API_CONFIG } from './config';

const { BASE_URL, AUTH } = API_CONFIG;

const authHeader = 'Basic ' + btoa(`${AUTH.username}:${AUTH.password}`);

export const createTrack = (isrc: string) => {
  return axios.post(
    `${BASE_URL}/metadata?isrc=${isrc}`,
    {},
    {
      headers: {
        Authorization: authHeader,
      },
    }
  );
};

export const getTrackMetadata = (isrc: string) => {
  return axios.get(`${BASE_URL}/metadata?isrc=${isrc}`, {
    headers: {
      Authorization: authHeader,
    },
  });
};

export const getCoverUrl = (isrc: string) => {
  return `${BASE_URL}/cover?isrc=${isrc}`;
};
