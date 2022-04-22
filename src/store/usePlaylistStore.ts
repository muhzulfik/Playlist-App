import create from "zustand";
import { IPlaylist } from "../types/iplaylist";

interface PlaylistState {
  playlist: IPlaylist[];
  setPlaylist: (playlist: IPlaylist[]) => void;
}

const usePlaylist = create<PlaylistState>((set) => ({
  playlist: [],
  setPlaylist: (playlist) => set({ playlist }),
}));

export default usePlaylist;
