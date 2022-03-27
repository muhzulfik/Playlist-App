import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import data from "../sample_data/Album";
import Card from "../component/Card";

const Home = () => {
  return (
    <>
      <Box py={{ sm: "5", lg: "10" }} px={{ sm: "10", lg: "20" }}>
        <SimpleGrid columns={[2, null, 3]} spacing="40px">
          {data.map((e) => (
            <Card
              key={e.id}
              img={e.album.images[0].url}
              title={e.name}
              artist={e.album.artists[0].name}
              urls={e.album.artists[0].external_urls.spotify}
            />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Home;
