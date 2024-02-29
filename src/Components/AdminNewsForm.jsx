import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Flex,
  Stack,
  useColorModeValue,
  Grid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { app, storage } from "../firebase/firebase";
import axios from "axios";
import { FaUpload } from "react-icons/fa";
const initialFormData = {
  heading: "",
  subHeading: "",
  author: "",
  trending: "no",
  numberOfClick: 0,
  catagory: [],
  article: "",
  imgs: [],
  thumbnail: null,
};

const YourFormComponent = () => {
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const [uploading1, setUploading1] = useState(false);
  const [uploading2, setUploading2] = useState(false);
  const [selectedButtons, setSelectedButtons] = useState([]);
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type == "file") {
      setFormData({
        ...formData,
        [name]: [files],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleChangeImg1 = async () => {
    setUploading1(true);
    const file = formData.thumbnail[0][0];

    if (file == null) return;
    const imgRef = ref(storage, `images/${file.name + Date.now()}`);
    try {
      const snapshot = await uploadBytes(imgRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      setFormData({
        ...formData,
        thumbnail: downloadURL,
      });
      setUploading1(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploading1(false);
    }
  };
  const handleChangeImg2 = async () => {
    setUploading2(true);
    const array = [];

    for (var i = 0; i < files.length; i++) {
      array.push(storeImg(files[i]));
    }
    Promise.all(array).then((urls) => {
      setFormData({ ...formData, imgs: formData.imgs.concat(urls) });
      setUploading2(false);
    });
  };
  const storeImg = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, `images/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "https://surtiesserver.onrender.com/news",
        formData
      );

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
    setFormData(initialFormData);
  };
  const handleDelete = () => {
    setFormData({ ...formData, thumbnail: null });
  };
  const handleDelete1 = (el) => {
    const newData = formData.imgs.filter((element) => {
      return element !== el;
    });

    setFormData({ ...formData, imgs: newData });
  };
  const handleButtonClick = (lable, index) => {
    if (selectedButtons.includes(lable)) {
      setSelectedButtons(selectedButtons.filter((item) => item !== lable));
      setFormData({ ...formData, catagory: selectedButtons });
    } else {
      if (selectedButtons.length <= 2) {
        setSelectedButtons([...selectedButtons, lable]);
        setFormData({ ...formData, catagory: selectedButtons });
      }
    }
    console.log(selectedButtons);
  };
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack
        mt={"50px"}
        mb={"50px"}
        spacing={8}
        mx={"auto"}
        w={"100%"}
        py={18}
        px={6}
      >
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={10}
        >
          <form onSubmit={handleSubmit}>
            <FormControl mb={4}>
              <FormLabel>Heading</FormLabel>
              <Input
                focusBorderColor="#cb202d"
                type="text"
                name="heading"
                value={formData.heading}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Subheading</FormLabel>
              <Input
                focusBorderColor="#cb202d"
                type="text"
                name="subHeading"
                value={formData.subHeading}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Article</FormLabel>
              <Textarea
                focusBorderColor="#cb202d"
                name="article"
                className="jobProfileSelector"
                rows={6}
                value={formData.article}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Thumbnail</FormLabel>
              <Flex gap={"10px"}>
                <Input
                  focusBorderColor="#cb202d"
                  type="file"
                  name="thumbnail"
                  onChange={handleChange}
                />
                <Button
                  isDisabled={formData.thumbnail == null}
                  pos={"static"}
                  loadingText=""
                  bg={"#cb202d"}
                  color={"white"}
                  _hover={{
                    bg: "yellow",
                    color: "#cb202d",
                  }}
                  isLoading={uploading1}
                  onClick={handleChangeImg1}
                  type="button"
                >
                  <FaUpload />
                </Button>
              </Flex>
            </FormControl>
            <Box>
              {typeof formData.thumbnail !== "string" ? (
                <></>
              ) : (
                <div>
                  <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"10px"}
                    flexDirection={"column"}
                  >
                    <img
                      style={{ width: "180px", borderRadius: "10px" }}
                      src={formData.thumbnail}
                      alt=""
                    />
                    <Button
                      onClick={handleDelete}
                      width={"100px"}
                      colorScheme="red"
                      type="button"
                    >
                      Delete
                    </Button>
                  </Flex>
                </div>
              )}
            </Box>
            <FormControl mb={4}>
              <FormLabel>Images</FormLabel>
              <Flex gap={"10px"}>
                <Input
                  focusBorderColor="#cb202d"
                  multiple="multiple"
                  type="file"
                  name="imgs"
                  onChange={(e) => {
                    setFiles(e.target.files);
                  }}
                />
                <Button
                  type="button"
                  pos={"static"}
                  bg={"#cb202d"}
                  color={"white"}
                  _hover={{
                    bg: "yellow",
                    color: "#cb202d",
                  }}
                  isLoading={uploading2}
                  onClick={handleChangeImg2}
                  isDisabled={!files[0]}
                >
                  <FaUpload />
                </Button>
              </Flex>
            </FormControl>
            <Box>
              {typeof formData.imgs[0] !== "string" ? (
                <></>
              ) : (
                <Flex gap={"10px"}>
                  {formData.imgs.map((el, index) => {
                    return (
                      <Flex
                        justifyContent={"center"}
                        direction={"column"}
                        alignItems={"center"}
                        gap={"10px"}
                        key={index}
                      >
                        <img
                          style={{ width: "160px", borderRadius: "10px" }}
                          src={el}
                          alt=""
                        />
                        <Button
                          type="button"
                          onClick={() => handleDelete1(el)}
                          width={"100px"}
                          colorScheme="red"
                        >
                          Delete
                        </Button>
                      </Flex>
                    );
                  })}
                </Flex>
              )}
            </Box>
            <FormControl mb={4}>
              <FormLabel>Author</FormLabel>
              <Input
                focusBorderColor="#cb202d"
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Trending</FormLabel>
              <Select
                focusBorderColor="#cb202d"
                name="trending"
                value={formData.trending}
                onChange={handleChange}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
            </FormControl>

            <Box>
              <FormLabel>Catagory</FormLabel>
              <Grid
                fontSize={{ base: "14px", md: "16px" }}
                templateColumns={"repeat(2, 1fr)"}
                gap={"10px"}
                mb={4}
              >
                {[
                  "top",
                  "latest",
                  "city/state",
                  "country",
                  "entertainment",
                  "women",
                  "forgin",
                  "cricket",
                  "sports",
                  "lifeStyle",
                  "job/Eduction",
                  "surties ",
                ].map((label, index) => (
                  <Button
                    key={label}
                    _hover={{}}
                    onClick={() => handleButtonClick(label, index)}
                    color={selectedButtons.includes(label) ? "white" : "black"}
                    backgroundColor={
                      selectedButtons.includes(label)
                        ? "#cb404d"
                        : "transparent"
                    }
                  >
                    <Text textTransform={"capitalize"}> {label}</Text>
                  </Button>
                ))}
              </Grid>
            </Box>
            <Stack spacing={10} pt={2}>
              <Button
                bg={"#cb202d"}
                color={"white"}
                _hover={{
                  bg: "yellow",
                  color: "#cb202d",
                }}
                type="submit"
                mt={4}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default YourFormComponent;
