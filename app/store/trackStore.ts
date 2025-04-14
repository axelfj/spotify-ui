import { create } from 'zustand';

interface TrackState {
  lastSearchedTrack: any | null;
  setLastSearchedTrack: (track: any) => void;
}

export const useTrackStore = create<TrackState>((set) => ({
  lastSearchedTrack: null,
  setLastSearchedTrack: (track) => set({ lastSearchedTrack: track }),
}));
