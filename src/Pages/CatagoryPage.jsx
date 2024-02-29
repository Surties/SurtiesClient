import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import axios from "axios";
import NewsCard from "../Components/NewsCard";
import StickyBox from "react-sticky-box";
function CatagoryPage() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { catagory } = useParams();

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/news?filter=${catagory}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.newsItems);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, [catagory]);
  return (
    <>
      <Box
        display={{ base: "flex", md: "flex" }}
        gap={"2%"}
        flexDirection={{ base: "column", md: "row" }}
        clear={"both"}
      >
        <Box
          backgroundColor={"#cb404d"}
          mb={"20px"}
          width={{ base: "100%", md: "20%" }}
        >
          <StickyBox offsetTop={20} offsetBottom={20}>
            <Sidebar />
          </StickyBox>
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(4, 1fr)",
            lg: '"repeat(4, 1fr)',
          }}
          gap={{ base: "15px", md: "5px" }}
          w={{ base: "100%", md: "75%" }}
          justifyContent={"center"}
        >
          {data.map((el) => {
            return <NewsCard data={el} />;
          })}
        </Grid>
      </Box>
    </>
  );
}

export default CatagoryPage;
