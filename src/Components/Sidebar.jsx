import React, { useState } from "react";
import { FaCity, FaFootballBall } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { BiCricketBall } from "react-icons/bi";
import { GiDramaMasks, GiIndianPalace } from "react-icons/gi";
import { RiGovernmentFill, RiWomenFill } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";
import { TbHandFinger, TbWriting } from "react-icons/tb";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { Box, Button, ListItem, UnorderedList } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function Sidebar() {
  const [show, setShow] = useState(false);
  return (
    <Box>
      <Box
        overflow={"hidden"}
        backgroundColor={"#cb404d"}
        width={{ base: "100%", md: "100%" }}
        height={{ base: `${!show ? "44px" : "215px"}`, md: "auto" }}
        mb={{ base: "40px", md: "" }}
      >
        <UnorderedList
          ml={"0px"}
          display={"grid"}
          gridTemplateColumns={{ base: "repeat(3,auto)", md: "repeat(1,1fr)" }}
          listStyleType={"none"}
          alignItems={"center"}
          gap={"20px"}
          pl={"6%"}
          position={"sticky"}
          color={"white"}
          mt={"10px"}
          justifyContent={{ base: "center", md: "flex-start" }}
          fontSize={{ base: "12px", md: "16px" }}
          fontWeight={{ base: "bold", md: "600" }}
        >
          {[
            { link: "top", icon: <IoMdTrendingUp /> },
            { link: "election", icon: <TbHandFinger /> },
            { link: "city", icon: <FaCity /> },
            { link: "country", icon: <GiIndianPalace /> },
            { link: "entertainment", icon: <GiDramaMasks /> },
            { link: "women", icon: <RiWomenFill /> },
            { link: "forign", icon: <CiGlobe /> },
            { link: "cricket", icon: <BiCricketBall /> },
            { link: "sports", icon: <FaFootballBall /> },
            { link: "lifestyle", icon: <StarIcon /> },
            { link: "education", icon: <TbWriting /> },
            { link: "surties", icon: <RiGovernmentFill /> },
            { link: "tech", icon: <IoPhonePortraitOutline /> },
          ].map((el, index) => (
            <ListItem
              border={{ base: "1px solid #cb404d ", md: "none" }}
              backgroundColor={{ base: "white", md: "#cb404d" }}
              color={{ base: "#cb404d", md: "white" }}
              display={"flex"}
              borderRadius={"10px"}
              alignItems={"center"}
              justifyContent={{ base: "center", md: "flex-start" }}
              gap={"4px"}
              key={index + el.link}
              _hover={{}}
              p={"2px"}
            >
              <Link
                style={{
                  textTransform: "capitalize",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
                to={`/news/catagory/${el.link}`}
              >
                {el.icon}
                {el.link}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
      <Box
        marginTop={"-50px"}
        position={"static"}
        top={`${show ? "0%" : "2%"}`}
        left={"0%"}
        display={{ base: "flex", md: "none" }}
        justifyContent={"center"}
      >
        <Button
          h={"30px"}
          onClick={() => setShow(!show)}
          backgroundColor={"white"}
          fontSize={"8px"}
          p={"5px 25px 5px 25px"}
          border={"1px solid #cb404d"}
          color={"#cb404d"}
          top={"15px"}
          borderRadius={"40px"}
        >
          View All
        </Button>
      </Box>
    </Box>
  );
}

export default Sidebar;
