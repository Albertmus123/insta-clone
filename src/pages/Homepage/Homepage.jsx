import { Box, Container, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { PostCard } from "../../components/PostCard/PostCard";

export const Homepage = () => {
  return (
    <Container maxW={"full"}>
      <Flex alignItems={"center"}>
        <Box>
          <PostCard />
        </Box>
        <Spacer />
        <Box bg={"yellow.600"} display={{ base: "none", lg: "block" }}>
          hjksdjsdk
        </Box>
      </Flex>
    </Container>
  );
};
