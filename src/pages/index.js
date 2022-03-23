import React from "react";
import {
  Box,
  Text,
  Image,
  Button,
  VStack,
  Link,
  HStack,
} from "@chakra-ui/react";
import axios from "axios";
import data from "../sample/Album";
import { useState, useEffect } from "react";

const Home = () => {
  // this is get data use axios
  const [albums, setAlbums] = useState();

  const getAlbum = () => {
    axios
      .get(
        "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json"
      )
      .then((res) => {
        console.log(res);
        setAlbums(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(`this ${albums}`);

  useEffect(() => {
    getAlbum();
  }, []);

  return (
    <>
      <Box py={{ sm: "5", lg: "10" }} px={{ sm: "10", lg: "20" }}>
        <HStack justifyContent="center" spacing={4}>
          {/* This is get Data from endpoint use axios */}
          <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={albums && albums.album.images[0].url} />

            <Box p="6">
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  {albums && albums.name}
                </Text>
                <Text fontSize="lg">{albums && albums.artists[0].name}</Text>
                <Link
                  style={{ textDecoration: "none" }}
                  href={albums && albums.album.artists[0].external_urls.spotify}
                >
                  <Button colorScheme="blue">Select</Button>
                </Link>
              </VStack>
            </Box>
          </Box>

          {/* This is get Data from import data from modules */}
          <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={data.album.images[0].url} />

            <Box p="6">
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  {data.name}
                </Text>
                <Text fontSize="lg">{data.artists[0].name}</Text>
                <Link
                  style={{ textDecoration: "none" }}
                  href={data.album.artists[0].external_urls.spotify}
                >
                  <Button colorScheme="blue">Select</Button>
                </Link>
              </VStack>
            </Box>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Home;
