import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function Header(props) {
  const { title, illustration, illustration_alt } = props.content;
  const image = getImage(illustration);
  return (
    <Box component="header" mb={12} sx={sx_container}>
      <GatsbyImage
        image={image}
        alt={illustration_alt}
        style={style_image}
      />
      <Typography variant="h1" children={title} sx={sx_typography} />
    </Box>
  );
}

export default Header;

const sx_container = {
  display: "grid",
  height: "150px",
};

const style_image = {
  width: "100%",
  height: "100%",
  gridArea: "1/1"
};

const sx_typography = {
  display: "grid",
  gridArea: "1/1",
  position: "relative",
  placeItems: "center",
  color: "primary.light"
};


