import { Badge, Box, Flex, Heading, Text } from "@radix-ui/themes";

const CategoryList = () => {
  const categorys = [
    { label: "Category", count: "34" },
    { label: "Category", count: "16" },
    { label: "Category", count: "34" },
  ];
  return (
    <Box px="5" py="6" width="100%" className="bg-[--gray-3]">
      <Heading mb="5" as="h3" size="4">
        Categorys
      </Heading>
      <Flex direction="column" gap="4">
        {categorys.map((c, i) => (
          <Flex
            key={i}
            className="bg-[--gray-2] hover:bg-[--accent-7] hover:cursor-pointer hover:text-[--gray-1] transition-colors"
            p="3"
            justify="between"
          >
            <Text> {c.label} </Text>
            <Badge variant="soft"> {c.count} </Badge>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default CategoryList;
