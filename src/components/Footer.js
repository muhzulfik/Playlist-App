import {
  Box,
  VStack,
  HStack,
  IconButton,
  Divider,
  Text,
  Link,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <Box py="4" bg="#172b4d">
      <VStack spacing="5">
        <Text fontSize="3xl" color="white" textAlign="center">
          Let's get in touch on social.
        </Text>
        <HStack display="flex" spacing="5">
          <Link href="/">
            <IconButton aria-label="linkedin" icon={<FaFacebook />} />
          </Link>
          <Link href="/">
            <IconButton aria-label="instagram" icon={<FaInstagram />} />
          </Link>
          <Link href="/">
            <IconButton aria-label="twitter" icon={<FiTwitter />} />
          </Link>
        </HStack>
        <Divider />
        <Box color="white" textAlign="center">
          <Text>&copy; 2022 PlaylistApp.</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Footer;
