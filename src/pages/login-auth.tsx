import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Text, Stack, Button, Box } from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";
import { setAccessToken } from "../store/authSlice";
import { clientId, redirectUri, scopes } from "../libs/config";
import { getHashParams } from "../utils/hashUtils";

const hashParams = getHashParams();
const access_token = hashParams.access_token;

const spotifyUrl = () => {
  return (
    "https://accounts.spotify.com/authorize" +
    "?response_type=token" +
    "&client_id=" +
    encodeURIComponent(clientId!) +
    "&scope=" +
    encodeURIComponent(scopes) +
    "&redirect_uri=" +
    encodeURIComponent(redirectUri!)
  );
};

const LoginPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (access_token) {
      dispatch(setAccessToken(access_token));
    }
  }, []);

  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Stack spacing="5">
          <Text
            fontSize="5xl"
            fontWeight="bold"
            fontFamily="Send Flowers, cursive;"
          >
            Welcome To Playlist App
          </Text>
          <Button
            leftIcon={<FaSpotify />}
            colorScheme="green"
            alignSelf="center"
            onClick={() => window.open(spotifyUrl(), "_self")}
          >
            Login Spotify
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default LoginPage;
