import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Img,
  useMediaQuery,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isSmaller] = useMediaQuery("(mix-width: 680px)");
  useEffect(() => {
    onClose();
  }, []);
  return (
    <>
      <Box>
        <Flex
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 2 }}
          borderStyle={"solid"}
          backgroundColor={"#cb404d"}
          borderBottom={"1px solid lightgrey"}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              _hover={{ backgroundColor: "transparent" }}
              icon={
                isOpen ? (
                  <CloseIcon color={"white"} w={3} h={3} />
                ) : (
                  <HamburgerIcon color={"white"} w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            ml={{ base: "0px", md: "40px" }}
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
            gap={3}
          >
            <Text
              textAlign={useBreakpointValue({
                base: "center",
                md: "left",
              })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              <Link to="/">
                <Img
                  width={"130px"}
                  src="https://surties.com/wp-content/uploads/2022/07/f-surties-logo.png"
                />
              </Link>
            </Text>

            <Flex
              display={{ base: "none", md: "flex" }}
              alignItems={"center"}
              gap={"15px"}
              ml={10}
            >
              <Link to={"/news/catagory/top"}>
                <Text fontWeight={"700"} color={"white"}>
                  Top
                </Text>
              </Link>
              <Link to={"/news/catagory/latest"}>
                <Text fontWeight={"700"} color={"white"}>
                  Latest
                </Text>
              </Link>

              <Link to={"/about-us"}>
                <Text fontWeight={"700"} color={"white"}>
                  About
                </Text>
              </Link>
              <Link to={"/contact-us"}>
                <Text fontWeight={"700"} color={"white"}>
                  Contact
                </Text>
              </Link>
              <Link to={"/career"}>
                <Text fontWeight={"700"} color={"white"}>
                  Career
                </Text>
              </Link>
            </Flex>
          </Flex>

          <Stack
            ml={10}
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={{ base: 0, md: 6 }}
            pr={{ base: "0px", md: "60px" }}
          >
            <Box display="flex" gap={{ base: 0, md: 3 }}></Box>
            <Link to="#">
              <Box display="flex" gap={2}>
                <FaRegUserCircle
                  style={{ marginRight: "6%" }}
                  color="white"
                  fontSize={"26px"}
                />
              </Box>
            </Link>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
      <Box
        w="100%"
        borderBottom="1px solid lightgrey"
        display={{ base: "none", md: "flex" }}
      ></Box>
    </>
  );
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue("white", "gray.800")} p={4}>
      <Box
        flexDirection={"column"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Box>
    </Stack>
  );
};

const MobileNavItem = ({ label, href }) => {
  return (
    <Stack>
      <Link to={href}>
        <Flex
          py={2}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text fontWeight={600} color={"#cb404d"}>
            {label}
          </Text>
        </Flex>
      </Link>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Top",
    href: "/news/catagory/top",
  },
  {
    label: "Latest",
    href: "/news/catagory/latest",
  },

  {
    label: "About",
    href: "/about-us",
  },
  {
    label: "Contact",
    href: "/contact-us",
  },
  {
    label: "Career",
    href: "/career",
  },
];
