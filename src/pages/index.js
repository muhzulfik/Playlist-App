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
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

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
    }

    setToken(token);
  }, []);

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
    console.log(tracks);
  };

  const renderTracks = () => {
    return tracks.map((e) => (
      <Card
        key={e.id}
        img={e.album.images[0].url}
        title={e.name}
        artist={e.album.artists[0].name}
        urls={e.album.artists[0].external_urls.spotify}
      />
    ));
  };

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  console.log(logout);

  return (
    <>
      <Stack
        py={{ sm: "5", lg: "10" }}
        px={{ sm: "10", lg: "20" }}
        spacing="10"
      >
        {!token ? (
          <Button>
            <a
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
              textDecoration="none"
            >
              Login Auth
            </a>
          </Button>
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
                urls={e.album.artists[0].external_urls.spotify}
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
