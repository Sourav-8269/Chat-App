import { Box, useColorModeValue, useColorMode } from "@chakra-ui/react";
import React from "react";
import Drawer from "./Drawer";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("#F7FAFC", "gray.900")} height="100vh" >
        <Drawer />
      </Box>
    </>
  );
};

export default Home;
