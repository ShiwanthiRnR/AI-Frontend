import React from "react";
import { Helmet } from "react-helmet";
import { Image, Flex } from "@chakra-ui/react";

export default function DesktopThreePage() {
  return (
    <>
      <Helmet>
        <title>lording page</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Flex pb="445px" bg="black" w="100%" justifyContent="center">
        <Flex gap="350px" w="100%" flexDirection="column" alignItems="center">
          <Flex>
            {/* <Image src="images/img_image_1.png" mb="1px" ml="40px" w="50px" h="40px" /> */}
            {/* <h1>Three screen</h1> */}
          </Flex>
          <Flex w="100%" justifyContent="space-between" alignItems="start">
          <a
              onClick={() => {
               window.location.href = '/Desktoptwo';
             }}
             >
            <Image src="images/img_frame.svg" h="80px" mb="33px" w="79px" />
            </a>
            <Image src="images/img_frame_blue_gray_700.svg" h="79px" mt="35px" w="78px" />
          </Flex>

          
        </Flex>
      </Flex>
    </>
  );
}
