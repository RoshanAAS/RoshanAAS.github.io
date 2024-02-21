import { Box, Flex, useColorMode,Text } from "@chakra-ui/react";
import React from "react";
import DefaultNavbar from "./Navbar/DefaultNavbar";
import MobileNavbar from "./Navbar/MobileNavbar";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { colorMode } = useColorMode();

  return (
    <Box
      zIndex={5}
      // border={"1px solid black"}
      position={"sticky"}
      top={0}
      bgColor={colorMode === "light" ? "#f7f7f7" : "black"}
    >
      <Flex
        h={"70px"}
        justifyContent={"space-between"}
        pl={["2", "2", "10"]}
        // border={"1px solid red"}
        alignItems={"center"}
      >
        <NavLink to={"https://roshanaas.github.io/"}>
          <Text style={{textShadow:"0 -1px 0 #f00,0 2px 0 #f00,0 4px 0 #60f,-2px -2px 15px #f06,2px -4px 15px #f06,-2px -2px 15px #f06,2px 2px 15px #ff00668b",fontFamily:"cursive",padding:"0px 8px 0px 8px"}} fontSize='4xl'>Roshan</Text>
        </NavLink>

        <DefaultNavbar />
        <MobileNavbar />
      </Flex>
    </Box>
  );
}

export default Navbar;
