'use client'
import { useState } from 'react';
import { getTrackMetadata } from '../api/trackApi';
import TrackCard from '../components/TrackCard';
import ErrorAlert from '../components/ErrorAlert';
import { TextField, Button, Container } from '@mui/material';

export default function SearchTrackPage() {
  const [isrc, setIsrc] = useState('');
  const [track, setTrack] = useState<any | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setTrack(null);
    try {
      const { data } = await getTrackMetadata(isrc);
      setTrack(data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong');
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
      {track && <TrackCard track={track} />}
    </Container>
  );
}
