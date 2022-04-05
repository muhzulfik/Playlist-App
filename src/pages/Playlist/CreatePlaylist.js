import React, { useState, useEffect } from "react";
import axios from "axios";

import { Stack, Text, VStack, Input, Textarea, Button } from "@chakra-ui/react";
import useUsers from "../../store/usersStore";
import { selectToken } from "../../store/tokenSlice";
import { usePlaylist } from "../../store/playlistStore";
import { useSelector, useDispatch } from "react-redux";
// import { setPlaylistId, selectPlaylistId } from "../../store/playlistSlice";

const CreatePlaylist = () => {
  // const dispatch = useDispatch();
  // const playlistId = useSelector(selectPlaylistId);

  const [form, setForm] = useState({ title: "", desc: "" });
  const { userId, fetch } = useUsers((state) => state);
  const addPlaylistId = usePlaylist((state) => state.addPlaylistId);
  const playlistId = usePlaylist((state) => state.playlistIds);
  const token = useSelector(selectToken);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch();
    if (form.title.length < 10) {
      alert("Title must be at least 10 characters");
    } else if (form.desc.length < 20) {
      alert("Description must be at least 20 characters");
    } else {
      createPlaylist();
    }
  };

  const createPlaylist = async () => {
    const url = `https://api.spotify.com/v1/users/${userId}/playlists`;
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
      .then((res) => {
        // dispatch(setPlaylistId(res.data.id));
        addPlaylistId(res.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    createPlaylist();
  }, []);

  console.log("ini id", playlistId);

  return (
    <>
      <Stack
        py={{ sm: "5", lg: "10" }}
        px={{ sm: "10", lg: "20" }}
        spacing="10"
      >
        <Text fontSize="30px" fontWeight="bold" textAlign="center">
          Create New Playlist
        </Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing="10">
            <Input
              placeholder="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
            <Textarea
              placeholder="Description"
              name="desc"
              value={form.desc}
              onChange={handleChange}
            />
            <Button type="submit">Submit</Button>
          </VStack>
        </form>
      </Stack>
    </>
  );
};

export default CreatePlaylist;
