'use client'

import { useState } from 'react';
import { getTrackMetadata } from '../api/trackApi';
import TrackCard from '../components/TrackCard';
import ErrorAlert from '../components/ErrorAlert';
import { TextField, Button, Container } from '@mui/material';
import { useTrackStore } from '../store/trackStore';
import { NULL_TRACK } from '../models/Track';
import { AxiosError } from 'axios';

const SearchTrackPage = () => {

  const [isrc, setIsrc] = useState('');
  const [error, setError] = useState('');
  const { lastSearchedTrack, setLastSearchedTrack } = useTrackStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLastSearchedTrack(NULL_TRACK);
    try {
      const { data } = await getTrackMetadata(isrc);
      setLastSearchedTrack(data);
    } catch (err) {
      const axiosError = err as AxiosError<{ message?: string }>;
      setError(axiosError.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
        <TextField
          label="Search ISRC"
          fullWidth
          value={isrc}
          onChange={(e) => setIsrc(e.target.value)}
          required
        />
        <Button variant="contained" color="secondary" type="submit" sx={{ mt: 2 }}>
          Search Track
        </Button>
      </form>
      {error && <ErrorAlert message={error} />}
      {lastSearchedTrack && <TrackCard track={lastSearchedTrack} />}
    </Container>
  );
}

export default SearchTrackPage;