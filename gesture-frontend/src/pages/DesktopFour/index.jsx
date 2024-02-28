import React from "react";
import { Helmet } from "react-helmet";
import { Image, Flex } from "@chakra-ui/react";

export default function DesktopFourPage() {
  return (
    <>
      <Helmet>
        <title>lording page</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Flex pb="445px" bg="green.800" w="100%" justifyContent="center">
        <Flex gap="350px" w="100%" flexDirection="column" alignItems="center">
          <Flex bg="gray.400" w="100%" p="8px">
            <Image src="images/img_image_1.png" mb="1px" ml="55px" w="9%" />
          </Flex>
          <Flex w="100%" justifyContent="space-between" alignItems="start">
            <Image src="images/img_frame.svg" h="80px" mb="33px" w="79px" />
            <Image src="images/img_frame_blue_gray_700.svg" h="79px" mt="35px" w="78px" />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
