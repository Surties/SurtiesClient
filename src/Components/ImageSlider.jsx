import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  const slideStyles = {
    width: "100%",
    paddingTop: "30%",
    display: "flex",
    color: "white",
    borderRadius: "12px",
  };

  const slideStylesWithBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].img})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <Flex>
      <Box style={slideStylesWithBackground}>
        <Flex
          height={"80%"}
          justifyContent={"space-between"}
          m={"0px 20px"}
          alignItems={"center"}
        >
          <Button backgroundColor={"#FAF5FF"} onClick={handlePrev}>
            <FaArrowLeft color="black" />
          </Button>
          <Button onClick={handleNext} backgroundColor={"#FAF5FF"}>
            <FaArrowRight />
          </Button>
        </Flex>
        <Text padding={"20px"} fontSize="3xl" fontWeight="bold">
          {slides[currentIndex].heading}
        </Text>
      </Box>
    </Flex>
  );
};

export default ImageSlider;
