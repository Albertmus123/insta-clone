import {
  Box,
  VStack,
  Image,
  Input,
  Button,
  Flex,
  Text,
  HStack,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <>
      <Box border={"1px solid #F1EFEF"} borderRadius={4} padding={8}>
        <VStack spacing={4}>
          <Image src="/logo.png" />
          <Input type="email" fontSize={12} placeholder="example@example.com" />
          <InputGroup>
            <Input
              type={isShowPassword ? "text" : "password"}
              fontSize={12}
              placeholder="password"
            />
            <InputRightElement
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </InputRightElement>
          </InputGroup>
          <InputGroup>
            {!isLogin && (
              <>
                <Input
                  type={isShowPassword ? "text" : "password"}
                  fontSize={12}
                  placeholder="confirm password"
                />
                <InputRightElement
                  onClick={() => setIsShowPassword(!isShowPassword)}
                >
                  {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                </InputRightElement>
              </>
            )}
          </InputGroup>
          <Button size={"sm"} w={"full"} fontSize={12} colorScheme="blue">
            {isLogin ? "Login" : "Sign Up"}
          </Button>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            w={"full"}
            gap={4}
          >
            <Box flex={2} h={"1px"} bg={"gray"} />
            <Text>OR</Text>
            <Box flex={2} h={"1px"} bg={"gray"} />
          </Flex>
          <Text>Forget password ?</Text>
        </VStack>
      </Box>
      <HStack
        fontSize={15}
        border={"1px solid #F1EFEF"}
        borderRadius={4}
        marginTop={6}
        padding={6}
      >
        <Text>
          {" "}
          {!isLogin
            ? "Alread have an account ?"
            : " Don't have an account?"}{" "}
        </Text>
        <Text
          onClick={() => setIsLogin(!isLogin)}
          cursor={"pointer"}
          color={"blue"}
        >
          {isLogin ? "Sign Up" : "Log In"}
        </Text>
      </HStack>
    </>
  );
};
