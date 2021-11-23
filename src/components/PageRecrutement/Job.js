import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { LinkButton } from "../MyComponents/GatsbyLinks";

function Job({ title, description, anchor, slug }) {
  return (
    <Stack component="article" sx={sx_container}>
      <Stack sx={sx_text}>
        <Typography variant="h3" children={title} />
        <Typography children={description} />
      </Stack>
      <LinkButton anchor={anchor} slug={slug}/>
    </Stack>
  );
}

export default Job;

const sx_container = {
  width: "100%",
  backgroundColor: "background.paper",
  flexDirection: { xs: "column", sm: "row" },
  justifyContent: { xs: "flex-start", sm: "space-between" },
  alignItems: { xs: "center" },
  gap: 3,
  p: 2,
};

const sx_text = {
  textAlign: { xs: "center", sm: "left" },
  gap: 2,
};
