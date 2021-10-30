import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function Point({ title, description, titleVariant, color}) {
  return (
    <Stack component="article" sx={sx_container}>
      <Typography variant={titleVariant} children={title} color={color}/>
      <Typography children={description} color={color}/>
    </Stack>
  );
}

export default Point;

const sx_container = {
  maxWidth: 550,
  alignItems: "center",
  textAlign: { xs: "center", md: "left" },
  gap: 2,
};
