'use client'

import { AxiosError } from 'axios';
import { useState } from 'react';
import { createTrack } from '../api/trackApi';
import TrackCard from '../components/TrackCard';
import ErrorAlert from '../components/ErrorAlert';
import { TextField, Button, Container } from '@mui/material';
import { useTrackStore } from '../store/trackStore';
import { NULL_TRACK } from '../models/Track';

const CreateTrackPage = () => {
  const [isrc, setIsrc] = useState('');
  const [error, setError] = useState('');
  const { lastSearchedTrack, setLastSearchedTrack } = useTrackStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLastSearchedTrack(NULL_TRACK);
    try {
      const { data } = await createTrack(isrc);
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
          label="Enter ISRC"
          fullWidth
          value={isrc}
          onChange={(e) => setIsrc(e.target.value)}
          required
        />
        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
          Create Track
        </Button>
      </form>
      {error && <ErrorAlert message={error} />}
      {lastSearchedTrack && <TrackCard track={lastSearchedTrack} />}
    </Container>
  );
}

export default CreateTrackPage;