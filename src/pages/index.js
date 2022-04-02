import React from "react";
import axios from "axios";
import {
  Stack,
  SimpleGrid,
  Input,
  HStack,
  IconButton,
  Button,
} from "@chakra-ui/react";
import data from "../sample_data/Album";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";

const Home = () => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_REDIRECT_URL,
    REACT_APP_AUTHORIZE_URL,
  } = process.env;

  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [show, setShow] = useState(true);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
      window.localStorage.setItem("tracks", searchKey);
    }

    setToken(token);
  }, [searchKey]);

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
        console.log(res);
        setTracks(res.data.tracks.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  const renderTracks = () => {
    console.log({ tracks });
    return tracks.map((e) => (
      <Card
        key={e.id}
        img={e.album.images[0].url}
        title={e.name}
        artist={e.album.artists[0].name}
        id={e.id}
      />
    ));
  };

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token", token);
  };

  return (
    <>
      <Stack
        py={{ sm: "5", lg: "10" }}
        px={{ sm: "10", lg: "20" }}
        spacing="10"
      >
        {!token ? (
          <Button onClick={handleLogin}>Login Spotify</Button>
        ) : (
          <Button onClick={logout}>Logout</Button>
        )}
        {token && (
          <form onSubmit={searchArtists}>
            <HStack>
              <Input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchKey(e.target.value)}
              />
              <IconButton
                colorScheme="blue"
                icon={<Search2Icon />}
                type="submit"
                onClick={() => setShow(false)}
              />
            </HStack>
          </form>
        )}
        {show ? (
          <SimpleGrid columns={[2, null, 3]} spacing="50px">
            {data.map((e) => (
              <Card
                key={e.id}
                img={e.album.images[0].url}
                title={e.name}
                artist={e.album.artists[0].name}
              />
            ))}
          </SimpleGrid>
        ) : (
          <SimpleGrid columns={[2, null, 3]} spacing="50px">
            {renderTracks()}
          </SimpleGrid>
        )}
      </Stack>
    </>
  );
};

export default Home;
