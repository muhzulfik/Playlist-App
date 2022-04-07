import React from "react";
import { clientId, redirectUri, scope } from "../../libs/config";
import { VStack, Text, Button } from "@chakra-ui/react";
import { BsSpotify } from "react-icons/bs";

export const LoginPage = () => {
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
