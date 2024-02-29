import React, { useState } from "react";
import { Box, FormControl, Input, Textarea, Button } from "@chakra-ui/react";
import axios from "axios";

const ContactPageComp = () => {
  const [contactData, setContactData] = useState({});
  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState(false);
  const [postData, setPostData] = useState({
    // Your data to be sent in the POST request
    // Example:
    // username: 'john_doe',
    // password: 'securepassword123'
  });
  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  };

  const isValidMobile = (mobileno) => {
    return /^[6-9]\d{9}$/.test(mobileno);
  };

  const validateField = (field, value) => {
    if (value.length <= 0) {
      return (
        <>
          <span className="text-capitalize">{field}</span> is a required field.
        </>
      );
    } else {
      if (field === "email") {
        if (!isValidEmail(value)) return "Invalid Email.";
      } else if (field === "mobile") {
        if (!isValidMobile(value)) return "Invalid Mobile Number.";
      } else {
        return "";
      }
    }
  };

  const handleBlur = (event) => {
    setErrorMsg(validateField(event.target.name, event.target.value));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContactData({
      ...contactData,
      [name]: value,
    });

    if (name === "mobile") {
      setContactData({
        ...contactData,
        mobile: value.replace(/\D/, ""),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !contactData.name ||
      !contactData.mobile ||
      !contactData.email ||
      !contactData.subject ||
      !contactData.message
    ) {
      setSuccessMsg(false);
      console.log(contactData);
      return;
    }

    setSuccessMsg(true);
  };

  const handlePostRequest = async () => {
    try {
      const response = await axios.post(
        "https://surtiesserver.onrender.com/contact-us",
        postData
      );

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Box
      backgroundColor={"white"}
      borderRadius={"8px"}
      width={{ base: "85%", md: "550px" }}
      id="contact"
      p={8}
    >
      <Box className="form">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          autoComplete="off"
        >
          {!successMsg ? (
            <>
              <Box
                id="errormessage"
                className={errorMsg ? "show" : ""}
                color="#cb404d"
                textAlign="center"
                padding="15px"
                fontWeight="600"
                marginBottom="15px"
              >
                {errorMsg}
              </Box>
              <FormControl mb={4}>
                <Input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={contactData.name || ""}
                  onChange={(e) => handleChange(e)}
                  onBlur={handleBlur}
                  color="#cb404d"
                  _placeholder={{ color: "#cb404d" }}
                  focusBorderColor="#cb404d"
                />
              </FormControl>
              <FormControl mb={4}>
                <Input
                  name="mobile"
                  type="text"
                  maxLength={10}
                  placeholder="Mobile"
                  onBlur={handleBlur}
                  focusBorderColor="#cb404d"
                  value={contactData.mobile || ""}
                  onChange={(e) => handleChange(e)}
                  _placeholder={{ color: "#cb404d" }}
                />
              </FormControl>
              <FormControl mb={4}>
                <Input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={contactData.subject || ""}
                  onChange={(e) => handleChange(e)}
                  onBlur={handleBlur}
                  focusBorderColor="#cb404d"
                  _placeholder={{ color: "#cb404d" }}
                />
              </FormControl>
              <FormControl mb={4}>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={contactData.email || ""}
                  onChange={(e) => handleChange(e)}
                  onBlur={handleBlur}
                  focusBorderColor="#cb404d"
                  _placeholder={{ color: "#cb404d" }}
                />
              </FormControl>
              <FormControl mb={4}>
                <Textarea
                  name="message"
                  type="text"
                  placeholder="Message"
                  value={contactData.message || ""}
                  onChange={(e) => handleChange(e)}
                  onBlur={handleBlur}
                  focusBorderColor="#cb404d"
                  _placeholder={{ color: "#cb404d" }}
                  rows="5"
                />
              </FormControl>
              <p className="text-right mb-0">
                <Button
                  type="submit"
                  color={"white"}
                  backgroundColor={"#cb404d"}
                  _hover={{}}
                >
                  Submit Now
                </Button>
              </p>
            </>
          ) : (
            <Box
              className="show"
              id="sendmessage"
              color="#007bff"
              border="1px solid #007bff"
              textAlign="center"
              padding="15px"
              fontWeight="600"
              marginBottom="15px"
            >
              Thank you for your message. We will contact you soon.
            </Box>
          )}
        </form>
      </Box>
    </Box>
  );
};

export default ContactPageComp;
