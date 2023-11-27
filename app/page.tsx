import { Box, Grid } from "@radix-ui/themes";

const Home = () => {
  return (
    <main>
      <Grid columns={{ initial: "1", md: "6" }} gap="4">
        <Box className="col-span-12 lg:col-span-4">main</Box>
        <Box className="col-span-12 lg:col-span-2">sidebar</Box>
      </Grid>
    </main>
  );
};

export default Home;
