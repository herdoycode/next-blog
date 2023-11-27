import {
  Inset,
  Text,
  Strong,
  Card,
  Box,
  Flex,
  Heading,
  Button,
} from "@radix-ui/themes";
import {
  CalendarIcon,
  ChatBubbleIcon,
  DashboardIcon,
} from "@radix-ui/react-icons";
import React from "react";

const PostCard = () => {
  return (
    <Card className="hover:shadow-xl transition-shadow">
      <Inset clip="padding-box" side="top" pb="current">
        <img
          src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
          alt="Bold typography"
          style={{
            display: "block",
            objectFit: "cover",
            width: "100%",
            height: 200,
            backgroundColor: "var(--gray-5)",
          }}
        />
      </Inset>
      <Box py="3">
        <Flex align="center" justify="between" mb="3">
          <Flex align="center" gap="2">
            <CalendarIcon /> <Text size="2">18 November, 2023</Text>
          </Flex>
          <Flex align="center" gap="2">
            <ChatBubbleIcon /> <Text size="2">18</Text>
          </Flex>
        </Flex>
        <Heading
          mb="3"
          as="h3"
          size="4"
          className="cursor-pointer hover:text-[--accent-9] transition-colors"
        >
          Typography is the art and technique
        </Heading>
        <Text as="p" mb="4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          deleniti corrupti aut at id labore...
        </Text>
        <Flex align="center" justify="between">
          <Button size="1" variant="soft" color="gray">
            Read More
          </Button>
          <Flex align="center" gap="2">
            <DashboardIcon /> <Text size="2">Travels</Text>
          </Flex>
        </Flex>
      </Box>
    </Card>
  );
};

export default PostCard;
