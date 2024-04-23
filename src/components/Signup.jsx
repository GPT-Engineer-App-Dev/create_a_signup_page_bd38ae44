import React from "react";
import { Box, Flex, Heading, Input, Button } from "@chakra-ui/react";

const Signup = () => {
  return (
    <Box>
      <Flex justify="center">
        <Heading>Sign up</Heading>
      </Flex>
      <Flex justify="center">
        <form>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button type="submit">Sign up</Button>
        </form>
      </Flex>
    </Box>
  );
};

export default Signup;
