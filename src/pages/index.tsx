import {
  Text,
  Stack,
  HStack,
  Avatar,
  Spacer,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import SidebarWithHeader from "../components/navbar";
import useUsers from "../store/useUserStore";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../store/authSlice";
import usePlaylist from "../store/usePlaylistStore";
import CardPlaylist from "../components/cardPlaylist";
import { Link } from "react-router-dom";

const MainPage = () => {
  const { user, fetch } = useUsers((state) => state);
  const { playlist, setPlaylist } = usePlaylist((state) => state);
  const token = useSelector(selectAccessToken);

  const getPlaylist = async () => {
    await axios
      .get("https://api.spotify.com/v1/me/playlists?limit=20", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPlaylist(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch();
    getPlaylist();
  }, []);

  return (
    <SidebarWithHeader>
      <Stack spacing="10">
        <HStack>
          <Avatar
            size="xl"
            name="Segun Adebayo"
            src={user.images && user.images[0].url}
            mr={{ sm: "2", lg: "5" }}
          />
          <Stack>
            <Text fontWeight="bold" fontSize={{ sm: "lg", lg: "3xl" }}>
              Hello, {user.display_name}!
            </Text>
          </Stack>
          <Spacer />
          <Text fontWeight="bold" fontSize={{ sm: "sm", lg: "md" }}>
            {playlist.length} Playlists
          </Text>
        </HStack>
        <Divider borderWidth="2px" borderColor="black" />
        <Stack spacing="10">
          <Text fontSize="3xl" fontWeight="bold">
            Your Playlists
          </Text>
          <SimpleGrid columns={[2, null, 3]} spacing="50px">
            {playlist.map((e: any) => {
              let image =
                "https://i.scdn.co/image/ab67616d0000b27327b7fb06450f25598103491d";
              if (e.images[0]) image = e.images[0].url;
              return (
                <Link to={`/playlist/${e.id}`}>
                  <CardPlaylist image={image} key={e.id} name={e.name} />
                </Link>
              );
            })}
          </SimpleGrid>
        </Stack>
      </Stack>
    </SidebarWithHeader>
  );
};

export default MainPage;
