import axios from 'axios';
import { BASE_URL, authHeaders } from './config';
export const createTrack = (isrc: string) => axios.post(`${BASE_URL}/metadata`, {}, { params: { isrc }, headers: authHeaders() });
export const getTrackMetadata = (isrc: string) => axios.get(`${BASE_URL}/metadata`, { params: { isrc }, headers: authHeaders() });
export const getCover = (isrc: string) => axios.get<Blob>(`${BASE_URL}/cover`, { params: { isrc }, headers: authHeaders(), responseType: 'blob' });
