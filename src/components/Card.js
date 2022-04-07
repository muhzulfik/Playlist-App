import React from "react";

import { Box, Text, Image, Button, VStack, Link } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectToken } from "../store/tokenSlice";
import { usePlaylist } from "../store/playlistStore";
import { useState } from "react";

import axios from "axios";

const Card = ({ img, title, artist, uri }) => {
  const token = useSelector(selectToken);
  const [isSelected, setIsSelected] = useState(false);
  const playlistId = usePlaylist((state) => state.playlistIds);

  const handleSelect = () => {
    setIsSelected(!isSelected);
    addPlaylist();
  };

  const addPlaylist = async () => {
    const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
    await axios.post(
      url,
      {
        uris: [uri],
        position: "",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  console.log({ playlistId });

  return (
    <>
      <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={img} alt="" />

        <Box p="6">
          <VStack spacing={4}>
            <Text fontSize="lg" fontWeight="bold" minH="50">
              {title}
            </Text>
            <Text fontSize="md">{artist}</Text>
            <Link style={{ textDecoration: "none" }}>
              <Button colorScheme="blue" onClick={handleSelect}>
                {isSelected ? "Deselect" : "Select"}
              </Button>
            </Link>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default Card;
