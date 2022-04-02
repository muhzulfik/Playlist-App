import React from "react";

import { Stack, Text } from "@chakra-ui/react";

const Playlist = () => {
  return (
    <Stack py={{ sm: "5", lg: "10" }} px={{ sm: "10", lg: "20" }} spacing="10">
      <Text>My Playlist</Text>
    </Stack>
  );
};

export default Playlist;
