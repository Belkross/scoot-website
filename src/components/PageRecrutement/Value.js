import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function Value(props) {
  const { title, description, illustration, alt } = props;
  const image = getImage(illustration);
  return (
    <Stack sx={sx_container} component="article">
      <GatsbyImage
        image={image}
        alt={alt}
        style={{ width: "230px", height: "230px", borderRadius: "50%" }}
      />
      <Stack sx={sx_text} spacing={3}>
        <Typography variant="h3" children={title} />
        <Typography children={description} />
      </Stack>
    </Stack>
  );
}

export default Value;

const sx_container = {
  gap: 4,
  mb: { xs: 8, md: 12 },
  alignItems: { xs: "center" },
};

const sx_text = {
  maxWidth: 550,
  alignItems: { xs: "center", md: "flex-start" },
  textAlign: { xs: "center", md: "left" },
};
