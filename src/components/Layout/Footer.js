import React from "react";
import Box from "@mui/material/Box";
import FooterPart1 from "./FooterPart1";
import FooterPart2 from "./FooterPart2";

function Footer(props) {
  const { content } = props;
  return (
    <Box component="footer" id="footer">
      <FooterPart1 content={content.footer} />
      <FooterPart2 content={content} />
    </Box>
  );
}

export default Footer;
