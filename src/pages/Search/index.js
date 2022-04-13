import React from "react";
import axios from "axios";
import { Stack, SimpleGrid } from "@chakra-ui/react";
import Card from "../../components/Card";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/tokenSlice";
import Search from "../../components/Search";

const SearchPage = () => {
  const [tracks, setTracks] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const token = useSelector(selectToken);

  //Search Songs
  const searchArtists = async (e) => {
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

  const handleClick = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <>
      <Stack
        py={{ sm: "5", lg: "10" }}
        px={{ sm: "10", lg: "20" }}
        spacing="10"
      >
        <Stack spacing="20">
          <Search handleForm={searchArtists} handleChange={handleClick} />
          <SimpleGrid>
            <SimpleGrid columns={[2, null, 3]} spacing="50px">
              {tracks.map((e) => (
                <Card
                  key={e.id}
                  img={e.album.images[0].url}
                  title={e.name}
                  artist={e.album.artists[0].name}
                  uri={e.uri}
                />
              ))}
            </SimpleGrid>
          </SimpleGrid>
        </Stack>
      </Stack>
    </>
  );
};

export default SearchPage;
