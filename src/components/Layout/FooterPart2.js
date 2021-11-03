import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButtonLink from "../MyComponents/IconButtonLink";
import IconsSocialMedia from "../MyComponents/IconsSocialMedia";

function FooterPart2(props) {
  const { content } = props;
  const array_socialMedia = Object.values(props.content.general.social_media);

  /* I didn’t find a way to call mui’s icons from content.yaml so we have to 
  add them manually before creating the list of social media icons */
  array_socialMedia.forEach((media) => {
    media["icon"] = IconsSocialMedia[media.name];
  });

  const list_socialMedia = array_socialMedia.map((media) => {
    return (
      <IconButtonLink
        key={media.name}
        name={media.name}
        icon={media.icon}
        website={media.website}
        color="secondary"
      />
    );
  });

  return (
    <Stack sx={sx_container} component="section">
      <Typography color="primary.light">{content.footer.copyright}</Typography>
      <Stack direction="row">{list_socialMedia}</Stack>
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
  gap: 3,
};
