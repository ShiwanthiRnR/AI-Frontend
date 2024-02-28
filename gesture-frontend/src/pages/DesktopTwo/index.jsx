import React from "react";
import { Image, Flex } from "@chakra-ui/react";


export default function DesktopTwoPage() {
  return (
    <>
      
      <Flex pb="445px" bg="black" w="100%" h="1000px" justifyContent="center">
        <Flex gap="350px" w="100%" flexDirection="column" alignItems="center">
          <Flex  >
            {/* <Image src="images/img_image_1.png" mb="1px" ml="40px" w="50px" h="40px" /> */}
           
          </Flex>
          <Flex w="100%" justifyContent="space-between" alignItems="start">
        
           <a
              onClick={() => {
               window.location.href = '/';
             }}
             >
           <Image src="images/img_frame.svg"  h="80px" mb="33px" w="79px"  />
            </a> 
            <a
              onClick={() => {
               window.location.href = '/desktopthree';
             }}
             >
       <Image src="images/img_frame_blue_gray_700.svg" h="79px" mt="35px" w="78px" />
         
            </a> 
            
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
