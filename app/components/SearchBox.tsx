"use client";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, TextField } from "@radix-ui/themes";

const SearchBox = () => {
  return (
    <Box px="5" py="6" width="100%" className="bg-[--gray-3]">
      <TextField.Root>
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input placeholder="Search posts" />
      </TextField.Root>
    </Box>
  );
};

export default SearchBox;
