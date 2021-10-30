import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ButtonLink from "../ButtonLink";

function Job({ title, location, link, linkPath }) {
  return (
    <Stack component="article" sx={sx_container}>
      <Stack sx={sx_text}>
        <Typography variant="h3" children={title} />
        <Typography children={location} />
      </Stack>
      <ButtonLink children={link} linkPath={linkPath}/>
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
