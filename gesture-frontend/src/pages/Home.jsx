import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      {/* <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1> */}
    
        {/* This project was generated By{" "}
        <a href="https://www.dhiwise.com" style={{ color: "#87CEFA", textDecoration: "none" }}>
          Dhiwise
        </a> */}
        
      {/* <ul style={{ listStyle: "none", padding: "0" }}> */}
    
      <Flex bg="black" w="30%" h="30%" justifyContent="center" marginBottom="10px">
        
          <Link to="/" style={{ color: "#87CEFA", textDecoration: "none" ,marginTop:20}}>
            ScreenOne
          </Link>
        </Flex >
        <Flex bg="black" w="30%" h="30%" justifyContent="center" marginBottom="10px">
          <Link to="/desktoptwo" style={{ color: "#87CEFA", textDecoration: "none",marginTop:20 }}>
            ScreenTwo
          </Link>
        </Flex>


        <Flex bg="black" w="30%" h="30%" justifyContent="center" marginBottom="10px">
          <Link to="/desktopthree" style={{ color: "#87CEFA", textDecoration: "none",marginTop:20 }}>
            ScreenThree
          </Link>
          </Flex>
       
          <Flex bg="black" w="30%" h="30%" justifyContent="center" marginBottom="10px">
          <Link to="/desktopfour" style={{ color: "#87CEFA", textDecoration: "none",marginTop:20 }}>
           ScreenFour
          </Link>
          </Flex>
       
      {/* </ul> */}
    </div>
  );
};
export default Home;
