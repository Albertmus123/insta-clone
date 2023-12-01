import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import React from "react";
import { AuthForm } from "../../components/AuthForm/AuthForm";

export const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex gap={8} justifyContent={"center"} alignItems={"center"}>
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/PhoneLogo.png" h={650} alt="Phone logo" />
          </Box>
          <VStack>
            <AuthForm />
            <Box textAlign={"center"} fontSize={17}>
              Get the app.
            </Box>
            <Flex
              gap={5}
              justifyContent={"center"}
              alignItems={"center"}
              padding={4}
            >
              <Image
                cursor={"pointer"}
                src="/googleLogo.png"
                alt="google logo"
              />
              <Image
                cursor={"pointer"}
                src="/microsoftLogo.png"
                alt="microsoft logo"
              />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};
