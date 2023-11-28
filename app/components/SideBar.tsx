import { Flex } from "@radix-ui/themes";
import React from "react";
import CategoryList from "./CategoryList";
import Newsletter from "./Newsletter";
import SearchBox from "./SearchBox";

const SideBar = () => {
  return (
    <Flex width="100%" direction="column" gap="6">
      <SearchBox />
      <CategoryList />
      <Newsletter />
    </Flex>
  );
};

export default SideBar;
