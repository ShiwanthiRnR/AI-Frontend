import React from "react";
import { Helmet } from "react-helmet";
import { Button, Image, Flex } from "@chakra-ui/react";

export default function DesktopOnePage() {

  const handleClick = () => {
    window.location.href = '/Desktoptwo';
    // Add your custom logic here
  };
  return (
    <>
      
      <Flex pb="473px" bg="black" w="100%" h="1000px" justifyContent="center">
        <Flex gap="385px" w="100%" flexDirection="column" alignItems="center" marginTop={400}>
          {/* <Flex>
            <Image src="images/img_image_1.png" mb="1px" ml="40px" w="50px" h="40px" />
          </Flex> */}
          <Button  onClick={handleClick}>Get Start </Button>
        </Flex>
      </Flex>
    </>
  );
}
