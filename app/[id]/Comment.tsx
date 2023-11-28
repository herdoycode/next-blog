import { Avatar, Box, Flex, Text } from "@radix-ui/themes";
const Comment = () => {
  return (
    <Flex gap="3">
      <Avatar
        size="2"
        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
        radius="full"
        fallback="T"
      />
      <Box>
        <Text as="div" size="2" weight="bold">
          Teodros Girmay
        </Text>
        <Text as="div" size="2" color="gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          eum, explicabo quo vel consectetur ducimus saepe repellendus quod
          accusantium voluptas aperiam, cumque numquam atque blanditiis dolores
          rerum. Earum, mollitia molestias?
        </Text>
      </Box>
    </Flex>
  );
};

export default Comment;
