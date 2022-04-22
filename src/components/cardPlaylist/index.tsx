import { Image, Stack, Text, Box } from "@chakra-ui/react";
import Card from "../card";
import { PlaylistItemProps } from "../../types/component/cardplaylist";

const CardPlaylist = ({ image, name }: PlaylistItemProps) => {
  return (
    <Card>
      <Image src={image} alt="Playlist" />
      <Box p="6">
        <Stack>
          <Text fontSize="lg" fontWeight="bold">
            {name}
          </Text>
        </Stack>
      </Box>
    </Card>
  );
};

export default CardPlaylist;
