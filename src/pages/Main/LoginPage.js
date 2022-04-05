import React from "react";
import { clientId, redirectUri, scope } from "../../libs/config";
import { VStack, Text, Button } from "@chakra-ui/react";
import { BsSpotify } from "react-icons/bs";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToken, selectToken } from "../../store/tokenSlice";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const spotifyUrl =
    "https://accounts.spotify.com/authorize" +
    "?response_type=token" +
    "&client_id=" +
    encodeURIComponent(clientId) +
    "&scope=" +
    encodeURIComponent(scope) +
    "&redirect_uri=" +
    encodeURIComponent(redirectUri);

  const handleLogin = () => {
    window.location = spotifyUrl;
  };

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
    }

    dispatch(setToken(token));
  }, []);

  console.log("ini token", token);

  return (
    <VStack marginTop="12%" spacing="5">
      <Text
        fontSize="5xl"
        fontWeight="bold"
        fontFamily="Send Flowers, cursive;"
      >
        Welcome To Playlist App
      </Text>
      <Button
        onClick={handleLogin}
        leftIcon={<BsSpotify />}
        colorScheme="green"
      >
        Login Spotify
      </Button>
    </VStack>
  );
};
