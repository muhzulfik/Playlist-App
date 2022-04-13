import { Flex, Input, IconButton } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const Search = ({ handleForm, handleChange }) => {
  return (
    <form onSubmit={handleForm}>
      <Flex>
        <Input
          id="search"
          type="text"
          mr={4}
          placeholder="Search"
          onChange={handleChange}
        />
        <IconButton colorScheme="blue" icon={<Search2Icon />} type="submit" />
      </Flex>
    </form>
  );
};

export default Search;
