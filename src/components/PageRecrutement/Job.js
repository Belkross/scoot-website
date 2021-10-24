import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Job({ title, location, button }) {
  return (
    <Stack component="article" sx={sx_container}>
      <Stack sx={sx_text}>
        <Typography variant="h3" children={title} />
        <Typography children={location} />
      </Stack>
      <Button color="secondary" children={button} />
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
