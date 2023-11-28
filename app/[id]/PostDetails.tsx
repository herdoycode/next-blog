import {
  CalendarIcon,
  ChatBubbleIcon,
  GitHubLogoIcon,
  HeartIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Box, Card, Flex, Heading, Inset, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

const PostDetails = () => {
  return (
    <Card className="hover:shadow-xl transition-shadow">
      <Inset clip="padding-box" side="top" pb="current">
        <Image
          width={500}
          height={100}
          src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
          alt="Bold typography"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
          atque expedita esse sit, blanditiis hic inventore repellendus iure,
          accusamus eveniet, dicta excepturi ea facilis libero earum provident
          voluptates cumque iusto! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Nostrum atque expedita esse sit, blanditiis hic
          inventore repellendus iure, accusamus eveniet, dicta excepturi ea
          facilis libero earum provident voluptates cumque iusto! Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Nostrum atque expedita
          esse sit, blanditiis hic inventore repellendus iure, accusamus
          eveniet, dicta excepturi ea facilis libero earum provident voluptates
          cumque iusto! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Nostrum atque expedita esse sit, blanditiis hic inventore
          repellendus iure, accusamus eveniet, dicta excepturi ea facilis libero
          earum provident voluptates cumque iusto! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Nostrum atque expedita esse sit,
          blanditiis hic inventore repellendus iure, accusamus eveniet, dicta
          excepturi ea facilis libero earum provident voluptates cumque iusto!
        </Text>
        <Flex align="center" justify="between" className="border-t" pt="5">
          <Flex align="center" gap="2">
            <HeartIcon /> <Text size="2">13k Liked</Text>
          </Flex>
          <Flex align="center" gap="2">
            <Link href="/">
              <GitHubLogoIcon />
            </Link>
            <Link href="/">
              <TwitterLogoIcon />
            </Link>
            <Link href="/">
              <InstagramLogoIcon />
            </Link>
            <Link href="/">
              <LinkedInLogoIcon />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Card>
  );
};

export default PostDetails;
