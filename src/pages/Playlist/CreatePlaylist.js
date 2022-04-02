import React, { useState } from "react";
import axios from "axios";

import { Stack, Text, VStack, Input, Textarea, Button } from "@chakra-ui/react";
import userStore from "../../store/userStore";

const sendFromNetworkCall = (data) => console.log(data);

const CreatePlaylist = () => {
  const [form, setForm] = useState({ title: "", desc: "" });
  const userId = userStore((state) => state.id);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendFromNetworkCall(form);
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
            Authorization: "Bearer " + window.localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        setForm(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(form);
  };

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
