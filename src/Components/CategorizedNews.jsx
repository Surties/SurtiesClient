import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import NewsCard from "./NewsCard";
import { Link } from "react-router-dom";

function CategorizedNews({ data, catagory, cata }) {
  return (
    <Link to={`/news/catagory/${cata}`}>
      <Flex alignItems={"center"} mt={"3%"} mr={"2.4%"}>
        <Text
          fontWeight={"500"}
          fontSize={"12px"}
          color={"#cb404d"}
          border={"1px solid #cb404d"}
          textAlign={"center"}
          padding={{ base: "5px", md: "5px 10px" }}
          borderRadius={"40px"}
          cursor={"default"}
          height={"30px"}
          width={{ base: "120px", md: "120px" }}
        >
          {catagory}
        </Text>
        <Box
          h={"0.5px"}
          w={"75%"}
          border={"1px solid #cb404d "}
          opacity={"0.5"}
        ></Box>
        <Button
          height={"30px"}
          fontSize={"12px"}
          padding={"10px 18px"}
          backgroundColor={"#cb404d"}
          color={"white"}
          borderRadius={"40px"}
          border={"1px solid #cb404d"}
          _hover={{
            color: "#cb404d",
            backgroundColor: "white",
            border: "1px solid #cb404d",
          }}
        >
          View all
        </Button>
      </Flex>
      <Flex justifyContent={"flex-start"}>
        <Grid
          mt={"2%"}
          p={"10px"}
          gridGap={"5px"}
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        >
          {data.map((el) => {
            return <NewsCard key={el._id} data={el} />;
          })}
        </Grid>
      </Flex>
    </Link>
  );
}

export default CategorizedNews;
