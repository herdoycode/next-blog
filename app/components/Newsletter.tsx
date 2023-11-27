"use client";
import { Box, Button, Heading, TextField } from "@radix-ui/themes";
import React from "react";

const Newsletter = () => {
  return (
    <Box px="5" py="6" width="100%" className="bg-[--gray-3]">
      <Heading as="h3" size="4" mb="4">
        Newsletter
      </Heading>
      <form className="w-full">
        <TextField.Root mb="3">
          <TextField.Input type="email" placeholder="Enter email" />
        </TextField.Root>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Newsletter;
