import { IAlbum } from "./ialbum";
import { IArtist } from "./iartist";

export type ITrack = {
  name: string;
  album: IAlbum;
  artists: IArtist[];
  uri: string;
  duration_ms: number;
};
