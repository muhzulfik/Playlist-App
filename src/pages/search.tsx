import axios from "axios";
import { Stack, SimpleGrid } from "@chakra-ui/react";
import Search from "../components/search";
import SidebarWithHeader from "../components/navbar";
import CardTrack from "../components/cardTracks";
import { selectAccessToken } from "../store/authSlice";
import { SetStateAction, useState } from "react";
import { useSelector } from "react-redux";

const SearchPage = () => {
  const [tracks, setTracks] = useState<any[]>([]);
  const [searchKey, setSearchKey] = useState("");
  const token = useSelector(selectAccessToken);

  const searchTracks = async (e: any) => {
    e.preventDefault();
    await axios
      .get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: searchKey,
          type: "track,artist",
        },
      })
      .then((res) => {
        setTracks(res.data.tracks.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchKey(e.target.value);
  };

  return (
    <SidebarWithHeader>
      <Stack spacing="10">
        <Search handleChange={handleClick} handleForm={searchTracks} />
        <SimpleGrid columns={[2, null, 3]} spacing="50px">
          {tracks.map((e) => (
            <CardTrack
              key={e.id}
              imgUri={e.album.images[0].url}
              albumName={e.album.name}
              titleTrack={e.name}
              uriTrack={e.uri}
              artistName={e.album.artists[0].name}
              durationTrack={e.duration_ms}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </SidebarWithHeader>
  );
};

export default SearchPage;
