import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Avatar,
  Text,
  Image,
  Input,
  VStack,
  Box,
  FormControl,
  InputRightElement,
  InputGroup,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { CommentCustomSvg } from "../Svgs/CommentCustomSvg";
import { SendCustomSvg } from "../Svgs/SendCustomSvg";
import { HeartCustomSvg } from "../Svgs/HeartCustomSvg";
import { SmileCustomSvg } from "../Svgs/SmileCustomSvg";

export const PostCard = () => {
  return (
    <Flex direction={"row"}>
      <Card my={4}>
        <CardHeader>
          <HStack pt={"20px"}>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Text>muslabert2</Text>
            <Text>.1d</Text>
            <Spacer />
            <Text fontSize={"20px"} fontWeight={"bold"}>
              ...
            </Text>
          </HStack>
        </CardHeader>
        <CardBody maxH={"100vh"} w={"540px"}>
          <Image
            width={"540px"}
            src="https://hips.hearstapps.com/hmg-prod/images/justin-bieber-gettyimages-1202421980.jpg?crop=1xw:1.0xh;center,top&resize=640:*"
          />
        </CardBody>
        <CardFooter>
          <VStack justifyContent={"start"} alignItems={"start"}>
            <HStack alignItems={"center"} spacing={"4px"}>
              <HeartCustomSvg />
              <CommentCustomSvg />
              <SendCustomSvg />
            </HStack>
            <Flex alignItems={"center"} spacing={"-40px"}>
              <Avatar
                name="Dan Abrahmov"
                size="2xs"
                src="https://bit.ly/dan-abramov"
              />

              <Avatar
                name="Kola Tioluwani"
                size="2xs"
                src="https://bit.ly/tioluwani-kolawole"
              />

              <Avatar
                size="2xs"
                name="Kent Dodds"
                src="https://bit.ly/kent-c-dodds"
              />
              <Text fontWeight={"bold"}>56,000 Likes</Text>
            </Flex>
            <Text>more ...</Text>
            <Box>
              <Text fontWeight={"bold"} fontSize={"14px"}>
                View all 34 Comments
              </Text>
            </Box>
            <FormControl>
              <InputGroup>
                <Input
                  variant={"ghost"}
                  w={"500px"}
                  placeholder="add Comment"
                />
                <InputRightElement>
                  <SmileCustomSvg />
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </VStack>
        </CardFooter>
      </Card>
    </Flex>
  );
};
