import { Avatar, Box, Button, Flex, TextArea } from "@radix-ui/themes";

const CommentForm = () => {
  return (
    <Flex gap="3" mt="6">
      <Avatar
        size="2"
        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
        fallback="A"
        radius="full"
      />
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
