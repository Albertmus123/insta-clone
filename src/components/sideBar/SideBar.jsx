import { Box, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RouteLink } from "react-router-dom";
import InstagramSvg from "../../../src/assets/instagram-svgrepo-com.svg";
import { GoHomeFill } from "react-icons/go";

export const SideBar = () => {
  return (
    <Box
      height={"100vh"}
      position={"sticky"}
      top={0}
      left={0}
      borderRight={"1px solid #F1EFEF"}
    >
      <Flex direction={"column"} gap={4} w={"full"} h={"full"}>
        <Link
          to={"/"}
          as={RouteLink}
          p={{ base: "4px", md: "10px" }}
          display={{ base: "none", md: "block" }}
        >
          <Image src="/logo.png" alt="logo" />
        </Link>

        <Link
          to={"/"}
          as={RouteLink}
          p={5}
          display={{ base: "block", md: "none" }}
        >
          <Image src={InstagramSvg} alt="InstgramLogo" />
        </Link>

        <Link
          to={"/"}
          as={RouteLink}
          px={5}
          display={{ base: "none", md: "block" }}
        >
          <HStack gap={4}>
            <GoHomeFill fontSize={"26px"} />{" "}
            <Text fontWeight={"bold"} fontSize={"large"}>
              Home
            </Text>
          </HStack>
        </Link>

        <Link
          to={"/"}
          as={RouteLink}
          px={5}
          display={{ base: "block", md: "none" }}
        >
          <GoHomeFill fontSize={"32px"} />
        </Link>
      </Flex>
    </Box>
  );
};
