export type Track = {
    isrc: string;
    name: string;
    artistName: string;
    albumName: string;
    albumId: string;
    playbackSeconds: number;
    coverImageUrl: string;
    explicit: boolean;
}

export const NULL_TRACK = {} as Track; // Placeholder for a null track