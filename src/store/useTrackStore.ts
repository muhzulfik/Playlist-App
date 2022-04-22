import create from "zustand";

interface TrackState {
  trackUris: string[];
  addTrackUri: (trackUri: string) => void;
  removeTrackUri: (trackUri: string) => void;
  clearTrackUris: () => void;
  isTrackUriExist: (trackUri: string) => boolean;
}

const useTrackStore = create<TrackState>((set, get) => ({
  trackUris: [],
  addTrackUri: (trackUri) => {
    if (!get().trackUris.includes(trackUri))
      set((state) => ({ trackUris: [...state.trackUris, trackUri] }));
  },
  removeTrackUri: (trackUri) =>
    set((state) => ({
      trackUris: state.trackUris.filter((t) => t != trackUri),
    })),
  clearTrackUris: () => set({ trackUris: [] }),
  isTrackUriExist: (trackUri) => get().trackUris.includes(trackUri),
}));

export default useTrackStore;
