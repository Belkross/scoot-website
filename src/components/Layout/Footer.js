import React from "react";
import Box from "@mui/material/Box";
import FooterPart1 from "./FooterPart1";
import FooterPart2 from "./FooterPart2";

function Footer() {
  return (
    <Box component="footer">
      <FooterPart1 />
      <FooterPart2 />
    </Box>
  );
}

export default Footer;
