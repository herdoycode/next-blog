"use client";
import { Box, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React from "react";

const SearchBox = () => {
  return (
    <Box p="4" width="100%" className="bg-zinc-100">
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
