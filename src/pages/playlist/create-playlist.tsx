import {
  VStack,
  Text,
  Input,
  Textarea,
  Button,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SidebarWithHeader from "../../components/navbar";
import axios from "axios";
import useUsers from "../../store/useUserStore";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../../store/authSlice";
import useTrackStore from "../../store/useTrackStore";

const CreatePlaylistPage = () => {
  const [form, setForm] = useState({ title: "", desc: "" });
  const token = useSelector(selectAccessToken);
  const [trackUris, clearTrackUris] = useTrackStore((state) => [
    state.trackUris,
    state.clearTrackUris,
  ]);

  const { user, fetch } = useUsers((state) => state);
  const toast = useToast();

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (form.title.length < 10) {
      toast({
        title: "Title must be at least 10 characters",
        status: "warning",
        position: "top",
        isClosable: true,
      });
    } else if (form.desc.length < 20) {
      toast({
        title: "Description must be at least 20 characters",
        status: "warning",
        position: "top",
        isClosable: true,
      });
    } else {
      createPlaylist();
      setForm({ title: "", desc: "" });
      toast({
        title: "Playlist created.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const createPlaylist = async () => {
    const url = `https://api.spotify.com/v1/users/${user.id}/playlists`;
    await axios
      .post(
        url,
        {
          name: form.title,
          description: form.desc,
          public: "false",
          collaborative: "false",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(async (res) => {
        console.log(res.data);
        const url = `https://api.spotify.com/v1/playlists/${res.data.id}/tracks`;
        await axios.post(
          url,
          {
            uris: trackUris,
            position: "",
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      })
      .then(() => clearTrackUris())
      .catch((err: any) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <SidebarWithHeader>
      <Stack spacing="10">
        <Text fontSize="30px" fontWeight="bold" textAlign="center">
          Create New Playlist
        </Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing="10">
            <Input
              placeholder="Title"
              _placeholder={{ color: "black" }}
              name="title"
              value={form.title}
              onChange={handleChange}
              borderColor="black"
              borderWidth="2px"
              isRequired
            />
            <Textarea
              placeholder="Description"
              _placeholder={{ color: "black" }}
              name="desc"
              value={form.desc}
              onChange={handleChange}
              borderColor="black"
              borderWidth="2px"
              isRequired
            />
            <Button type="submit" colorScheme="blue">
              Create
            </Button>
          </VStack>
        </form>
      </Stack>
    </SidebarWithHeader>
  );
};

export default CreatePlaylistPage;
