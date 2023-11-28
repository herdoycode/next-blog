import { Box, Container, Grid, Heading, Text } from "@radix-ui/themes";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[--gray-12] py-6 px-4 mt-8">
      <Container>
        <Grid columns={{ initial: "1", lg: "4", md: "2" }} gap="5">
          <Box>
            <Heading as="h2" mb="3" className="text-[--gray-1]">
              Lorem ipsum.
            </Heading>
            <Text as="p" className="text-[--gray-3]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quae officia quidem voluptatibus deserunt, quod iusto id, suscipit
              ipsa cumque
            </Text>
          </Box>
          <Box>
            <Heading as="h2" mb="3" className="text-[--gray-1]">
              Lorem ipsum.
            </Heading>
            <Text as="p" className="text-[--gray-3]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quae officia quidem voluptatibus deserunt, quod iusto id, suscipit
              ipsa cumque
            </Text>
          </Box>
          <Box>
            <Heading as="h2" mb="3" className="text-[--gray-1]">
              Lorem ipsum.
            </Heading>
            <Text as="p" className="text-[--gray-3]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quae officia quidem voluptatibus deserunt, quod iusto id, suscipit
              ipsa cumque
            </Text>
          </Box>
          <Box>
            <Heading as="h2" mb="3" className="text-[--gray-1]">
              Lorem ipsum.
            </Heading>
            <Text as="p" className="text-[--gray-3]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quae officia quidem voluptatibus deserunt, quod iusto id, suscipit
              ipsa cumque
            </Text>
          </Box>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
