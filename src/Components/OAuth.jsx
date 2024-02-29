import { Button } from "@chakra-ui/react";
import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebase";
function OAuth() {
  const handleOAuth = async () => {
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (error) {
      console.log("could not login in with google ", error);
    }
  };
  return (
    <Button
      onClick={handleOAuth}
      type="button"
      _hover={{ backgroundColor: "blue.500", color: "white" }}
    >
      <img
        width={"45px"}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F09%2FGoogle-Symbol.png&f=1&nofb=1&ipt=adf380cdca2fbf428e52f794ff0c4b4e4c1624b594c862507accb22ea2b2eb7d&ipo=images"
        alt=""
      />{" "}
      Continue with google
    </Button>
  );
}

export default OAuth;
