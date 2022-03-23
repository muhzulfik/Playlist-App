import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  Heading,
  Spacer,
  IconButton,
  Button,
  useColorMode,
  useDisclosure,
  Collapse,
  VStack,
  Stack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  Link,
} from "@chakra-ui/react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const toast = useToast();
  return (
    <>
      <Box
        as="header"
        px={{ sm: "7", lg: "14" }}
        py={{ sm: "3", lg: "6" }}
        boxShadow="md"
      >
        <HStack maxW="7xl" mx="auto" d={{ base: "none", md: "flex" }}>
          <Box>
            <Heading size="lg">PlaylistApp</Heading>
          </Box>
          <Spacer />
          <Box>
            <IconButton
              aria-label="Switch icon"
              icon={
                colorMode === "light" ? (
                  <MdOutlineDarkMode />
                ) : (
                  <MdOutlineLightMode />
                )
              }
              onClick={toggleColorMode}
              mr="2"
            />
            <Link style={{ textDecoration: "none" }} href="/">
              <Button variant="ghost" mr="2">
                Beranda
              </Button>
            </Link>
            <Button
              variant="outline"
              rounded="md"
              colorScheme="facebook"
              onClick={onModalOpen}
            >
              Say Hello
            </Button>
          </Box>
        </HStack>
        <HStack d={{ base: "flex", md: "none" }} justifyContent="space-between">
          <Box>
            <Heading size="lg">PlaylistApp</Heading>
          </Box>
          <Spacer />
          <IconButton
            aria-label="Switch icon"
            icon={
              colorMode === "light" ? (
                <MdOutlineDarkMode />
              ) : (
                <MdOutlineLightMode />
              )
            }
            onClick={toggleColorMode}
            mr="2"
          />
          <IconButton
            aria-label="Options"
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="outline"
            onClick={onToggle}
          />
        </HStack>
      </Box>
      <VStack align="stretch" display={{ md: "none" }}>
        <Collapse in={isOpen} animateOpacity>
          <Stack borderBottomWidth={2} pb="4">
            <Button variant="ghost" rounded="none">
              Beranda
            </Button>
            <Box alignSelf="center">
              <Button
                variant="outline"
                colorScheme="facebook"
                onClick={onModalOpen}
              >
                Say Hello
              </Button>
            </Box>
          </Stack>
        </Collapse>
      </VStack>
      <Box px="4">
        <Modal
          blockScrollOnMount={false}
          isOpen={isModalOpen}
          onClose={onModalClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <HStack>
                <Text>Hello besties, How can I help you?</Text>
                <Spacer />
                <IconButton
                  variant="outline"
                  aria-label="close modal"
                  icon={<IoClose />}
                  fontSize="xl"
                  onClick={onModalClose}
                  rounded="md"
                />
              </HStack>
            </ModalHeader>
            <ModalBody>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea />
              </FormControl>
            </ModalBody>

            <ModalFooter alignSelf="center">
              <Button
                variant="outline"
                onClick={() =>
                  toast({
                    title: "Thank you Besties",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                  })
                }
              >
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default Home;
