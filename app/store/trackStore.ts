import { create } from 'zustand';
import { NULL_TRACK, Track } from '../models/Track';

interface TrackState {
  lastSearchedTrack: Track;
  setLastSearchedTrack: (track: Track) => void;
}

export const useTrackStore = create<TrackState>((set) => ({
  lastSearchedTrack: NULL_TRACK,
  setLastSearchedTrack: (track) => set({ lastSearchedTrack: track }),
}));
