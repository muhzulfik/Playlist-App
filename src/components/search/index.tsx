import { Flex, Input, IconButton } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { SearchItemProps } from "../../types/component/search";

const Search = ({ handleForm, handleChange }: SearchItemProps) => {
  return (
    <form onSubmit={handleForm}>
      <Flex>
        <Input
          id="search"
          type="text"
          mr={4}
          placeholder="Search"
          onChange={handleChange}
          borderWidth="2px"
          borderColor="black"
          _placeholder={{ color: "black" }}
        />
        <IconButton
          colorScheme="blue"
          icon={<Search2Icon />}
          type="submit"
          aria-label={""}
        />
      </Flex>
    </form>
  );
};

export default Search;
