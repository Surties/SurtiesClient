import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  useToast,
  Select,
} from "@chakra-ui/react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/firebase";
import axios from "axios";
const jobProfiles = [
  "Software Engineer",
  "Product Manager",
  "UX Designer",
  "Data Scientist",
];

const CareerForm = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    postion: "",
    phoneNumber: "",
  });
  const toast = useToast();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    if (file == null) return;
    const imgRef = ref(storage, `resumes/${file.name + Date.now()}`);
    try {
      const snapshot = await uploadBytes(imgRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);

      try {
        const response = await axios.post(
          "https://surtiesserver.onrender.com/career",
          {
            ...formData,
            file: downloadURL,
          }
        );
        setUploading(false);
        console.log("Server Response:", response.data);
      } catch (error) {
        console.error("Error submitting form:", error);
        setUploading(false);
      }

      toast({
        position: "top",
        title: "Resume",
        color: "#c3251f",
        description: "Uploaded Successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploading(false);
    }
  };

  return (
    <Box p={"20px"} mt={"20px"} className="careerForm">
      <Container
        p={"30px"}
        pt={"40px"}
        borderRadius={"8px"}
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}
      >
        <form onSubmit={handleSubmit}>
          <FormControl pos={"static"}>
            <FormLabel>Name</FormLabel>
            <Input
              pos={"static"}
              focusBorderColor="#cb202d"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl pos={"static"}>
            <FormLabel>Email</FormLabel>
            <Input
              pos={"static"}
              focusBorderColor="#cb202d"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl pos={"static"} mb={4}>
            <FormLabel>Job Profile</FormLabel>
            <Select
              focusBorderColor="#cb202d"
              className="jobProfileSelector"
              name="postion"
              value={formData.postion}
              onChange={handleChange}
            >
              {jobProfiles.map((profile) => (
                <option
                  style={{ position: "static" }}
                  key={profile}
                  value={profile}
                >
                  {profile}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl pos={"static"} mb={4}>
            <FormLabel>Phone Number</FormLabel>
            <Input
              pos={"static"}
              focusBorderColor="#cb202d"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl pos={"static"} mb={4}>
            <FormLabel>Resume</FormLabel>
            <Input
              pos={"static"}
              focusBorderColor="#cb202d"
              type="file"
              name="file"
              value={formData.file}
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </FormControl>
          <Box marginTop={"40px"} display={"flex"} justifyContent={"flex-end"}>
            <Button
              pos={"static"}
              transition={"bgColor 1s"}
              bgColor={"#cb202d"}
              _hover={{ bgColor: "yellow", color: "#cb202d" }}
              isLoading={uploading}
              loadingText="Uploading..."
              type="submit"
              color={"white"}
              w={"140px"}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default CareerForm;
