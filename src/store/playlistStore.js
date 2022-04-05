import create from "zustand";
import { persist } from "zustand/middleware";

export const usePlaylist = create(
  persist((set) => ({
    playlistIds: [],
    addPlaylistId: (playlistId) =>
      set((state) => ({ playlistIds: [...state.playlistIds, playlistId] })),
  }))
);
