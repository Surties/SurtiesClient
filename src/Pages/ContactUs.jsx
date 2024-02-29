import React from "react";
import ContactPageComp from "../Components/ContactPageComp";
import { Box, Center, Flex } from "@chakra-ui/react";

function ContactUs() {
  return (
    <Flex
      p={"20px"}
      background={"#cb404d"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={{ base: "column", md: "row" }}
      gap={"20px"}
    >
      <Center w={{ base: "100%", md: "49%" }}>
        {" "}
        <ContactPageComp />
      </Center>

      <Center
        justifyContent={"center"}
        alignItems={"center"}
        w={{ base: "100%", md: "49%" }}
        mb={"40px"}
      >
        <iframe
          width="85%"
          height="550"
          frameborder="0"
          scrolling="yes"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=106,%20SNS%20SYNERGY,%20Surat%20-%20Dumas%20Rd,%20near%20CENTRAL%20MALL,%20Surat,%20Gujarat%20395007+(Surties%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps trackers</a>
        </iframe>
      </Center>
      <Box></Box>
    </Flex>
  );
}

export default ContactUs;
