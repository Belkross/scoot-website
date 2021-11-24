import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { GatsbyImage } from "gatsby-plugin-image";

export default function PointIllustration(props) {
  const { title, description, illustration, alt } = props;
  return (
    <Stack sx={sx_container} component="article">
      <GatsbyImage image={illustration} alt={alt} style={style_image} />
      <Stack sx={sx_text}>
        <Typography variant="h3" children={title} />
        <Typography children={description} />
      </Stack>
    </Stack>
  );
}

const sx_container = {
  mb: { xs: 8, md: 12 },
  alignItems: { xs: "center" },
  gap: 4,
};

const style_image = { width: "230px", height: "230px", borderRadius: "50%" };

const sx_text = {
  maxWidth: 550,
  alignItems: { xs: "center", md: "flex-start" },
  textAlign: { xs: "center", md: "left" },
  gap: 3,
};
