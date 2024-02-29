import React, { useState } from "react";
import AdminNewsForm from "../Components/AdminNewsForm";
import { Box, Button, Center } from "@chakra-ui/react";
import NewsSlider from "../Components/NewsSlider";
import UpdateNews from "../Components/UpdateNews";
import AdminUserControl from "../Components/AdminUserControl";
import AdminAccess from "../Components/AdminAccess";
import NewsEditorAccess from "../Components/NewsEditorAccess";

function Admin() {
  const [activeComponent, setActiveComponent] = useState(
    <NewsEditorAccess>
      <AdminNewsForm />
    </NewsEditorAccess>
  );
  const renderComponent = (component) => {
    setActiveComponent(component);
  };
  return (
    <Box mt={"50px"}>
      <Center
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(2,44%)",
          md: "repeat(2,36%)",
          lg: "repeat(4,180px)",
        }}
        mt={"50px"}
        gap={"10px"}
      >
        <Button
          backgroundColor={"transparent"}
          onClick={() =>
            renderComponent(
              <AdminAccess>
                <AdminUserControl />
              </AdminAccess>
            )
          }
        >
          Admin Control
        </Button>
        <Button
          backgroundColor={"transparent"}
          onClick={() =>
            renderComponent(
              <NewsEditorAccess>
                <NewsSlider />
              </NewsEditorAccess>
            )
          }
        >
          News Slider
        </Button>
        <Button
          backgroundColor={"transparent"}
          onClick={() =>
            renderComponent(
              <NewsEditorAccess>
                <AdminNewsForm />
              </NewsEditorAccess>
            )
          }
        >
          Upload News
        </Button>
        <Button
          backgroundColor={"transparent"}
          onClick={() =>
            renderComponent(
              <NewsEditorAccess>
                <UpdateNews />
              </NewsEditorAccess>
            )
          }
        >
          Upadate News
        </Button>
      </Center>

      <Center>{activeComponent && <div>{activeComponent}</div>}</Center>
    </Box>
  );
}

export default Admin;
