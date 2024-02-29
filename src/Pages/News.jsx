import React, { useEffect, useState } from "react";
import ImageSlider from "../Components/ImageSlider";
import axios from "axios";
import StickyBox from "react-sticky-box";

import { Box, Flex } from "@chakra-ui/react";
import CategorizedNews from "../Components/CategorizedNews";
import Sidebar from "../Components/Sidebar";
import { LOGIN_LOADING } from "../Redux/auth/auth.actiontype";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;
const containerStyles = {
  width: "90%",
};

function News() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [news, setNews] = useState([{ documents: [] }]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://surtiesserver.onrender.com/slider"
      );
      setSlides(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const getNews = () => {
    axios
      .get("https://surtiesserver.onrender.com/news/grouped")
      .then((response) => {
        setNews(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  const getUser = () => {
    dispatch({
      type: LOGIN_LOADING,
    });
    axios
      .get("https://surtiesserver.onrender.com/auth/signin-token", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.role == "admin" || res.data.role == "newsEditor") {
          // navigate("/admin");
        } else navigate("/");
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchData();
    getNews();
    getUser();
  }, []);
  return (
    <Flex flexDirection={{ base: "column", md: "row" }}>
      <Box backgroundColor={"#cb404d"} width={{ base: "100%", md: "20%" }}>
        <StickyBox offsetTop={20} offsetBottom={20}>
          <Sidebar />
        </StickyBox>
      </Box>
      <Box w={{ base: "100%", md: "74%" }} mr={"3%"}>
        {" "}
        <Flex mt={"30px"} justifyContent={"center"}>
          <div style={containerStyles}>
            {loading ? <h1>Loading...</h1> : <ImageSlider slides={slides} />}
          </div>
        </Flex>
        <Box>
          {news.map((el) => {
            return (
              <CategorizedNews
                catagory={el.category}
                data={el.documents}
                cata={el.category}
              />
            );
          })}
        </Box>
      </Box>
    </Flex>
  );
}

export default News;
