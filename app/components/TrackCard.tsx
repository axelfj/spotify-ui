import { Card, CardContent, Typography, Box } from '@mui/material';
import { getCoverUrl } from '../api/trackApi';
import { formatSeconds } from '../utils/time';
import { Track } from '../models/Track';

const TrackCard = ({ track }: { track: Track }) => {
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
            src={getCoverUrl(track.isrc)}
            alt="cover"
            style={{ width: '100%' }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default TrackCard;