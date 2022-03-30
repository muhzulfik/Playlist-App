import React from "react";

import { Box, Text, Image, Button, VStack, Link } from "@chakra-ui/react";

const Card = ({ img, title, artist, urls }) => {
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
            <Link style={{ textDecoration: "none" }} href={urls}>
              <Button colorScheme="blue">Select</Button>
            </Link>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default Card;