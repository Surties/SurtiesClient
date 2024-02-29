import React, { useState } from "react";
import { Input, Button, Flex } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Flex align="center" justify="space-between">
      <Input
        type="text"
        placeholder="Search..."
        focusBorderColor="#cb404d"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mr={2}
      />
      <Button
        color={"white"}
        backgroundColor={"#cb404d"}
        onClick={handleSearch}
      >
        <FaSearch />
      </Button>
    </Flex>
  );
};

export default Searchbar;
