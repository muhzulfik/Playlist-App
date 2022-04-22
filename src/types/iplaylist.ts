import { IPlaylistTrack } from "./iplaylisttrack";
import { IImage } from "./iimage";

export type IPlaylist = {
  id: string;
  name: string;
  description: string;
  images: IImage[];
  tracks: IPlaylistTrack;
};
