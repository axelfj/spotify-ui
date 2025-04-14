import axios from 'axios';

const BASE_URL = 'http://localhost:8080/track';

// Basic Auth credentials
const username = 'admin';
const password = 'password';
const authHeader = 'Basic ' + btoa(`${username}:${password}`);

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
