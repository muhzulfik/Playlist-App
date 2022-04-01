import create from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      trackIds: [],
      addTrackId: (trackId) =>
        set((state) => ({ trackIds: [...state.trackIds, trackId] })),
      isTrackIdExisted: (trackId) => get().trackIds.indexOf(trackId) !== -1,
    }),
    { name: "trackIds", getStorage: () => localStorage }
  )
);

export default useStore;
