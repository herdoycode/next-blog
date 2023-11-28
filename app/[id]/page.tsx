import { Box, Grid } from "@radix-ui/themes";
import SideBar from "../components/SideBar";
import CommentsArea from "./CommentsArea";
import PostDetails from "./PostDetails";

const page = () => {
  return (
    <main>
      <Grid columns={{ initial: "1", md: "6" }} gap="6">
        <Box className="col-span-12 lg:col-span-4">
          <PostDetails />
          <CommentsArea />
        </Box>
        <Box className="col-span-12 lg:col-span-2">
          <SideBar />
        </Box>
      </Grid>
    </main>
  );
};

export default page;
