import { Flex,Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <Flex flexDirection="column" height="100%">
        <Flex justifyContent="space-around" >
          <Flex  bg="black" w="25%" h="200px" justifyContent="space-around" marginBottom="10px" marginTop="10px" marginRight="10px">
            <Link to="/" style={{ color: "#87CEFA", textDecoration: "none",marginTop:"10px"}}>
              ScreenOne
            </Link>
          </Flex>
          <Flex bg="black" w="25%" h="200px" justifyContent="space-around" marginBottom="10px" marginTop="10px" marginLeft="10px">
            <Link to="/desktoptwo" style={{ color: "#87CEFA", textDecoration: "none",marginTop:"10px"}}>
              ScreenTwo
            </Link>
          </Flex>
        </Flex>
        <Flex justifyContent="space-around">
          <Flex bg="black" w="25%" h="200px" justifyContent="space-around" marginBottom="10px" marginTop="10px" marginRight="10px">
            <Link to="/desktopthree" style={{ color: "#87CEFA", textDecoration: "none",marginTop:"10px"}}>
              ScreenThree
            </Link>
          </Flex>
          <Flex bg="black" w="25%" h="200px" justifyContent="space-around" marginBottom="10px" marginTop="10px" marginLeft="10px">
            <Link to="/desktopfour" style={{ color: "#87CEFA", textDecoration: "none",marginTop:"10px"}}>
              ScreenFour
            </Link>
          </Flex>
        </Flex>
     <Flex marginTop="50px"   justifyContent="center">
      <Flex  alignItems="center" ml="5"  >
          <Button>Screen one </Button>
        </Flex>
        
      <Flex alignItems="center" ml="5">
          <Button> <Link to= ""></Link>Screen two</Button>
        </Flex>
        <Flex  alignItems="center" ml="5">
          <Button>Screen three</Button>
        </Flex>
        <Flex    alignItems="center" ml="5">
          <Button>Screen four </Button>
        </Flex>
        </Flex>
        </Flex>
    </div>
  );
};

export default Home;
