// Import necessary libraries
import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";

// Sample data for the About Us page
const aboutUsData = {
  officeImage:
    "https://free4kwallpapers.com/uploads/originals/2015/10/11/well-furnished-office-wallpaper.jpg", // Replace with the actual path to your office image
  title: "Welcome to Surties - Your Source for Surat News",
  description:
    "Surties is a digital media channel dedicated to providing the latest news and updates from Surat, Gujarat. We strive to deliver accurate and timely information in Gujarati to keep our audience well-informed about the happenings in and around Surat.",
  mission:
    "Our mission is to be the go-to platform for Surat-based news, fostering a sense of community and connection among the residents of this vibrant city.",
  teamMembers: [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image:
        "https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain",
    },
    {
      name: "Jane Doe",
      role: "Chief Editor",
      image:
        "https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain",
    },
    {
      name: "Jane Doe",
      role: "Chief Editor",
      image:
        "https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain",
    },
    {
      name: "Jane Doe",
      role: "Chief Editor",
      image:
        "https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain",
    },
    {
      name: "Jane Doe",
      role: "Chief Editor",
      image:
        "https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain",
    },
    {
      name: "Jane Doe",
      role: "Chief Editor",
      image:
        "https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain",
    },
    {
      name: "Jane Doe",
      role: "Chief Editor",
      image:
        "https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain",
    },
    {
      name: "Jane Doe",
      role: "Chief Editor",
      image:
        "https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain",
    },
    {
      name: "Jane Doe",
      role: "Chief Editor",
      image:
        "https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain",
    },
    {
      name: "Jane Doe",
      role: "Chief Editor",
      image:
        "https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain",
    },
    // Add more team members as needed
  ],
  history:
    "Surties started its journey in 20XX with a vision to become the primary source of news for Surat. Over the years, we have grown and adapted to the ever-changing media landscape, consistently providing reliable news coverage.",
  achievements: [
    "Award for Best Local News Coverage (20XX)",
    "Million Subscribers Milestone (20XX)",
    // Add more achievements as needed
  ],
  goals: {
    whatWeDo:
      "We are committed to delivering news that matters to the people of Surat. Our coverage includes local events, politics, culture, and everything that makes Surat unique.",
    whatWeWant:
      "Our goal is to become the most trusted news source for the people of Surat, building a strong bond with our audience and contributing to the growth and well-being of our community.",
  },
  contact: {
    email: "info@surties.com",
    phone: "+91 123 456 7890",
    address: "123, News Street, Surat, Gujarat, India",
  },
};

// AboutUs component
const AboutUs = () => {
  return (
    <Box maxW="100%" mx="auto">
      <Image
        src={aboutUsData.officeImage}
        alt="Office"
        maxH="300px"
        w="100%"
        objectFit="cover"
      />

      <Box p={8} bgColor="#cb404d" color="white" borderRadius="10px" mt="-50px">
        <Heading fontSize={"35px"} mb={6}>
          {aboutUsData.title}
        </Heading>
        <Text fontSize="lg" mb={8}>
          {aboutUsData.description}
        </Text>

        <Heading size="md" mb={4}>
          Our Mission
        </Heading>
        <Text mb={6}>{aboutUsData.mission}</Text>

        <Heading size="lg" mb={4}>
          Meet Our Team
        </Heading>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(6, 1fr)" }}
          gap={6}
        >
          {aboutUsData.teamMembers.map((member, index) => (
            <GridItem key={index}>
              <Box
                bgColor="white"
                p={4}
                borderRadius="10px"
                textAlign="center"
                boxShadow="lg"
                overflow="hidden"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  borderRadius="full"
                  boxSize="150px"
                  mx="auto"
                />
                <Heading size="sm" mt={2}>
                  {member.name}
                </Heading>
                <Text fontSize="sm" color="#cb404d">
                  {member.role}
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>

        <Heading size="md" mt={8} mb={4}>
          Our History
        </Heading>
        <Text mb={6}>{aboutUsData.history}</Text>

        <Heading size="md" mb={4}>
          Achievements
        </Heading>
        <VStack align="start" spacing={2}>
          {aboutUsData.achievements.map((achievement, index) => (
            <Text key={index}>&#8226; {achievement}</Text>
          ))}
        </VStack>

        <Heading size="md" mt={8} mb={4}>
          What We Do
        </Heading>
        <Text mb={6}>{aboutUsData.goals.whatWeDo}</Text>

        <Heading size="md" mb={4}>
          What We Want to Achieve
        </Heading>
        <Text mb={6}>{aboutUsData.goals.whatWeWant}</Text>

        <Heading size="md" mt={8} mb={4}>
          Contact Us
        </Heading>
        <VStack align="start" spacing={2}>
          <Text>Email: {aboutUsData.contact.email}</Text>
          <Text>Phone: {aboutUsData.contact.phone}</Text>
          <Text>Address: {aboutUsData.contact.address}</Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default AboutUs;
