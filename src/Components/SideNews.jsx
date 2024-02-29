import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

function SideNews() {
  const str = "Will remain a 'samajwadi' and Akhilesh's uncle: Shivpal Yadav";
  const para =
    "Lucknow, Feb 9 (PTI) Taking a dig at the excessive concern Uttar Pradesh Chief Minister Yogi Adityanath shows in him, senior Samajwadi Party leader Shivpal Yadav on Friday asserted he was a “diehard samajwadi (socialist)” and would remain party chief Akhilesh Yadav’s uncle Shivpal Singhs remarks are a response to Adityanath jibes that Akhilesh does not respect his uncle and that Shivpal Singh has not got his due in Samajwadi Party (SP). The chief minister has referred to Shivpal as “chachu” in his remarks. Speaking in the budget session of the UP assembly, Shivpal Singh said he was firmly with the PDA – a term used by SP leaders referring to people belonging to the backward classes (‘pichde’ in Hindi), Dalits and minorities (‘alpsankhyak’). The Leader of the House (the CM) sometimes gets worried about me. It seems that he is doing chacha pe charcha Shivpal said";

  return (
    <Box
      boxShadow={
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
      }
      w={"90%"}
      borderRadius={"4px"}
    >
      <Box>
        <img
          src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1i2RwX.img?w=768&h=512&m=6&x=1993&y=543&s=565&d=565"
          alt=""
        />
      </Box>
      <Box p={"10px"}>
        <Text textTransform={"capitalize"} fontWeight={"650"} fontSize={"19px"}>
          {str}
        </Text>
        <Text>{para.length <= 300 ? para : para.slice(0, 300) + "..."}</Text>
      </Box>
    </Box>
  );
}

export default SideNews;
