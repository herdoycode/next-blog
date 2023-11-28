import { Box, Flex } from "@radix-ui/themes";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const CommentsArea = () => {
  return (
    <Box mt="6">
      <Flex direction="column" gap="5">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Flex>
      <CommentForm />
    </Box>
  );
};

export default CommentsArea;
