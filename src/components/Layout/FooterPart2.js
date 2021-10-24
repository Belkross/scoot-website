import React from "react";
import Stack from "@mui/material/Stack";
import IconTwitter from "../../assets/icons/IconTwitter";
import IconInstagram from "../../assets/icons/IconInstagram";
import IconFacebook from "../../assets/icons/IconFacebook";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

function FooterPart2() {
  return (
    <Stack sx={sx_container}>
      <Typography color="secondary">Mentions légales</Typography>
      <Stack direction="row">
        <IconButton children={<IconInstagram />} />
        <IconButton children={<IconFacebook />} />
        <IconButton children={<IconTwitter />} />
      </Stack>
    </Stack>
  );
}

export default FooterPart2;

const sx_container = {
  height: 70,
  backgroundColor: "#333A44",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
};
