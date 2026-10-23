import { Card, CardContent, Typography, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { getCover } from '../api/trackApi';
import { formatSeconds } from '../utils/time';
import { Track } from '../models/Track';

const TrackCard = ({ track }: { track: Track }) => {
  const [cover, setCover] = useState<string>();
  const isrc = track?.isrc;
  useEffect(() => {
    let active = true; let url: string | undefined;
    setCover(undefined);
    if (isrc) getCover(isrc).then(({ data }) => { if (active) { url = URL.createObjectURL(data); setCover(url); } }).catch(() => { if (active) setCover(undefined); });
    return () => { active = false; if (url) URL.revokeObjectURL(url); };
  }, [isrc]);
  if (!track || !track.isrc) return null;
  return (
    <Card sx={{ mt: 4 }}>
      <CardContent>
        <Typography variant="h6">{track.name}</Typography>
        <Typography>Artist: {track.artistName}</Typography>
        <Typography>Album: {track.albumName}</Typography>
        <Typography>Explicit: {track.explicit ? 'Yes' : 'No'}</Typography>
        <Typography>Playback: {formatSeconds(track.playbackSeconds)}</Typography>
        <Box mt={2}>
          <img
            src={cover}
            alt="cover"
            style={{ width: '100%' }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default TrackCard;