import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { SearchCustomSvg } from "../Svgs/SearchCustomSvg";
import { HomeCustomeSvg } from "../Svgs/HomeCustomeSvg";
import { ExploreCustomSvg } from "../Svgs/ExploreCustomSvg";
import { ReelsCustomSvg } from "../Svgs/ReelsCustomSvg";
import { MessageCustomSvg } from "../Svgs/MessageCustomSvg";
import { NotificationCustomSvg } from "../Svgs/NotificationCustomSvg";
import { InstagramCustomSvg } from "../Svgs/InstagramCustomSvg";
import { CreateCustomSvg } from "../Svgs/CreateCustomSvg";
import { Avatar } from "@chakra-ui/react";
import { HomePhoneCustomSvg } from "../Svgs/HomePhoneCustomSvg";

export const SideBar = () => {
  return (
    <Box
      height={"100vh"}
      position={"sticky"}
      top={0}
      left={0}
      borderRight={"1px solid #F1EFEF"}
    >
      <Flex direction={"column"} gap={6} w={"full"} h={"full"} padding={4}>
        <Box display={{ base: "none", md: "block" }}>
          <RouteLink to={"/"}>
            <Image src="/logo.png" alt="logo" />
          </RouteLink>
        </Box>

        <Box display={{ base: "block", md: "none" }}>
          <RouteLink to={"/"}>
            <InstagramCustomSvg />
          </RouteLink>
        </Box>

        <RouteLink to={"/"} px={5}>
          <Flex direction={"row"} gap={4}>
            <Box display={{ base: "block", md: "none" }}>
              <HomePhoneCustomSvg />
            </Box>
            <Box display={{ base: "none", md: "block" }}>
              <HomeCustomeSvg />
            </Box>
            <Box
              display={{ base: "none", md: "block" }}
              fontWeight={"bold"}
              fontSize={"medium"}
              pt={1.5}
            >
              Home
            </Box>
          </Flex>
        </RouteLink>
        <RouteLink to={"/"} px={5}>
          <Flex direction={"row"} gap={4}>
            <SearchCustomSvg />
            <Box
              display={{ base: "none", md: "block" }}
              fontWeight={"bold"}
              fontSize={"medium"}
              pt={1.5}
            >
              Search
            </Box>
          </Flex>
        </RouteLink>
        <RouteLink to={"/"} px={5}>
          <Flex direction={"row"} gap={4}>
            <ExploreCustomSvg />
            <Text
              display={{ base: "none", md: "block" }}
              fontWeight={"bold"}
              fontSize={"medium"}
              pt={1.5}
            >
              Explore
            </Text>
          </Flex>
        </RouteLink>
        <RouteLink to={"/"} px={5}>
          <Flex direction={"row"} gap={4}>
            <ReelsCustomSvg />
            <Text
              display={{ base: "none", md: "block" }}
              fontWeight={"bold"}
              fontSize={"medium"}
              pt={1.5}
            >
              Reels
            </Text>
          </Flex>
        </RouteLink>
        <RouteLink to={"/"} px={5}>
          <Flex direction={"row"} gap={4}>
            <MessageCustomSvg />
            <Text
              display={{ base: "none", md: "block" }}
              fontWeight={"bold"}
              fontSize={"medium"}
              pt={1.5}
            >
              Messages
            </Text>
          </Flex>
        </RouteLink>
        <RouteLink to={"/"} px={5}>
          <Flex direction={"row"} gap={4}>
            <NotificationCustomSvg />
            <Text
              display={{ base: "none", md: "block" }}
              fontWeight={"bold"}
              fontSize={"medium"}
              pt={1.5}
            >
              Notifications
            </Text>
          </Flex>
        </RouteLink>
        <RouteLink to={"/"} px={5}>
          <Flex direction={"row"} gap={4}>
            <CreateCustomSvg />
            <Text
              display={{ base: "none", md: "block" }}
              fontWeight={"bold"}
              fontSize={"medium"}
              pt={1.5}
            >
              Create
            </Text>
          </Flex>
        </RouteLink>
        <RouteLink to={"/"} px={5}>
          <Flex direction={"row"} gap={6}>
            <Avatar
              size={"sm"}
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />
            <Text
              display={{ base: "none", md: "block" }}
              fontWeight={"bold"}
              fontSize={"medium"}
              pt={1.5}
            >
              Profile
            </Text>
          </Flex>
        </RouteLink>
      </Flex>
    </Box>
  );
};
