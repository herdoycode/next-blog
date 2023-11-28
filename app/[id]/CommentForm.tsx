"use client";
import { Avatar, Box, Button, Flex, TextArea } from "@radix-ui/themes";
import { useSession } from "next-auth/react";

const CommentForm = () => {
  const { data } = useSession();
  return (
    <Flex gap="3" mt="6">
      <Avatar size="2" src={data?.user?.image!} fallback="A" radius="full" />
      <Box grow="1">
        <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
        <Flex gap="3" mt="3" justify="between">
          <Flex align="center" gap="2" asChild></Flex>

          <Button size="1">Comment</Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CommentForm;
