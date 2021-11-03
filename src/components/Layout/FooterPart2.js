import React from "react";
import Stack from "@mui/material/Stack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

function FooterPart2(props) {
  const { content } = props;
  const list_Icons = array_Icons.map((icon, index) => {
    return (
      <IconButton key={index} color="secondary">
        {icon}
      </IconButton>
    );
  });

  return (
    <Stack sx={sx_container} component="section">
      <Typography color="primary.light">{content.copyright}</Typography>
      <Stack direction="row">{list_Icons}</Stack>
    </Stack>
  );
}

export default FooterPart2;

const array_Icons = [
  <TwitterIcon fontSize="large" />,
  <InstagramIcon fontSize="large" />,
  <FacebookIcon fontSize="large" />,
  <LinkedInIcon fontSize="large" />,
];

const sx_container = {
  height: 70,
  backgroundColor: "#333A44",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 3,
};
