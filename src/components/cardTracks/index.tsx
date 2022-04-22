import { Box, Text, Image, Button, VStack, Link } from "@chakra-ui/react";
import Card from "../card";
import { useMemo } from "react";
import { CardTracksItemProps } from "../../types/component/cardTracks";
import convertDuration from "../../libs/helpers";
import useTrackStore from "../../store/useTrackStore";

const CardTrack = ({
  imgUri,
  titleTrack,
  artistName,
  albumName,
  uriTrack,
  durationTrack,
}: CardTracksItemProps) => {
  const { trackUris, addTrackUri, removeTrackUri, isTrackUriExist } =
    useTrackStore((state) => state);
  const isSelected = useMemo(
    () => isTrackUriExist(uriTrack),
    [trackUris, uriTrack]
  );

  const handleSelect = () => {
    if (!isSelected) addTrackUri(uriTrack);
    else removeTrackUri(uriTrack);
  };

  return (
    <Card>
      <Image src={imgUri} alt={albumName} />

      <Box p="6">
        <VStack spacing={3}>
          <Text fontSize="lg" fontWeight="bold" minH="50">
            {titleTrack}
          </Text>
          <Text fontSize="md" fontWeight="bold">
            {artistName}
          </Text>
          <Text fontSize="md" data-testid="custom-element">
            {convertDuration(durationTrack)}
          </Text>
          <Link style={{ textDecoration: "none" }}>
            <Button colorScheme="blue" onClick={handleSelect}>
              {isSelected ? "Deselect" : "Select"}
            </Button>
          </Link>
        </VStack>
      </Box>
    </Card>
  );
};

export default CardTrack;
