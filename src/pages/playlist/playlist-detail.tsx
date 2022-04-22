import SidebarWithHeader from "../../components/navbar";
import {
  Box,
  HStack,
  Text,
  Image,
  Stack,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../../store/authSlice";
import { useEffect, useState } from "react";
import Card from "../../components/card";
import axios from "axios";
import { IPlaylist } from "../../types/iplaylist";
import convertDuration from "../../libs/helpers";
import { useParams } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";

interface PlaylistDetailPageParams {
  id: string;
}

const PlaylistDetailPage = () => {
  const token = useSelector(selectAccessToken);
  const [selectedPlaylist, setSelectedPlaylist] = useState<IPlaylist>();
  const { id } = useParams<PlaylistDetailPageParams>();

  const detailPlaylist = async () => {
    await axios
      .get(`https://api.spotify.com/v1/playlists/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setSelectedPlaylist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    detailPlaylist();
  }, []);

  return (
    <SidebarWithHeader>
      <Stack spacing="10">
        <HStack spacing="10">
          <Card>
            <Image src={selectedPlaylist?.images[0].url} alt="" />
          </Card>
          <Stack>
            <Text fontSize={{ sm: "lg", lg: "4xl" }} fontWeight="bold">
              {selectedPlaylist?.name}
            </Text>
            <Text fontSize={{ sm: "sm", lg: "xl" }} fontWeight="bold">
              {selectedPlaylist?.description}
            </Text>
          </Stack>
        </HStack>
        <Divider borderWidth="2px" borderColor="black" />
        <Box>
          <Table variant="striped" colorScheme="telegram">
            <Thead borderBottomWidth="2px">
              <Tr>
                <Th>Title</Th>
                <Th>Album</Th>
                <Th>
                  <FaRegClock size="20px" />
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {selectedPlaylist?.tracks.items.map((item) => (
                <Tr>
                  <Td>
                    <HStack spacing="2">
                      <Card>
                        <Image
                          src={item.track.album.images[0].url}
                          alt=""
                          maxH="50px"
                          maxW="50px"
                        />
                      </Card>
                      <Stack>
                        <Text fontSize="sm" fontWeight="bold">
                          {item.track.name}
                        </Text>
                        <Text fontSize="xs" fontWeight="bold">
                          {item.track.artists[0].name}
                        </Text>
                      </Stack>
                    </HStack>
                  </Td>
                  <Td>{item.track.album.name}</Td>
                  <Td>{convertDuration(item.track.duration_ms)}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Stack>
    </SidebarWithHeader>
  );
};

export default PlaylistDetailPage;
