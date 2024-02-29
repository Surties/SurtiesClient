import React from "react";
import "./Styles/footer.css";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaFacebookSquare, FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <Box className="footer">
      <hr />
      <Box className="grid">
        <Box className="footerLinks">
          <img
            className="footerImg"
            src="https://surties.com/wp-content/uploads/2022/07/f-surties-logo.png"
            alt=""
          />
          <Flex gap={"10px"}>
            <FaInstagram fontSize={"25px"} color="purple" />
            <FaFacebookSquare fontSize={"25px"} color="blue" />
            <FaYoutube fontSize={"28px"} color="red" />
          </Flex>
        </Box>

        <Box className="footerLinks">
          <Heading color={"white"}>Contact</Heading>
          <Box className="footerAdress">
            <MdEmail fontSize={"25px"} color="white" />
            <Text color={"white"}> info@surties.com</Text>
          </Box>
          <Box className="footerLocation">
            <Link>
              <Box className="footerAdress">
                <FaLocationDot fontSize={"25px"} color="white" />
                <Text color={"white"}>
                  106, SNS SYNERGY, Surat - Dumas Rd, Surat, Gujarat 395007
                </Text>
              </Box>
            </Link>
          </Box>
        </Box>
        <Box className="footerLinks">
          <Heading color={"white"}>Quick Links</Heading>
          <Text color={"white"}>Home</Text>
          <Link to={"/career"}>
            <Text color={"white"}>Career</Text>
          </Link>
          <Text color={"white"}>About Us</Text>
          <Text color={"white"}>Contact Us</Text>

          <Text></Text>
        </Box>
      </Box>
      <Center>
        <Text color={"white"} p={"10px"}>
          ©2024 Surties Media Pvt. Ltd.
        </Text>
      </Center>
    </Box>
  );
}

export default Footer;
