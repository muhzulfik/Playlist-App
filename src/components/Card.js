import React, { useMemo } from "react";

import { Box, Text, Image, Button, VStack, Link } from "@chakra-ui/react";
import useStore from "../store";

const Card = ({ img, title, artist, id }) => {
  const [addTrackId, isTrackIdExisted, trackIds] = useStore((state) => [
    state.addTrackId,
    state.isTrackIdExisted,
    state.trackIds,
  ]);
  const isSelected = useMemo(() => isTrackIdExisted(id), [trackIds]);

  const handleSelect = () => {
    addTrackId(id);
  };
  console.log(isSelected);
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
