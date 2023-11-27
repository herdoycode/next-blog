import { Box, Flex, Grid } from "@radix-ui/themes";
import SearchBox from "./components/SearchBox";
import CategoryList from "./components/CategoryList";
import Newsletter from "./components/Newsletter";

const Home = () => {
  return (
    <main>
      <Grid columns={{ initial: "1", md: "6" }} gap="4">
        <Box className="col-span-12 lg:col-span-4">main</Box>
        <Box className="col-span-12 lg:col-span-2">
          <Flex width="100%" direction="column" gap="6">
            <SearchBox />
            <CategoryList />
            <Newsletter />
          </Flex>
        </Box>
      </Grid>
    </main>
  );
};

export default Home;
