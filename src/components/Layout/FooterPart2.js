import React from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
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
    <Grid component="section" container sx={sx_container} spacing={1}>
      <Grid item sx={sx_GridItem1} xs={12} sm={6}>
        <Typography color="primary.light">
          {content.footer.copyright}
        </Typography>
      </Grid>
      <Grid item sx={sx_GridItem2} xs={12} sm={6}>
        <Stack
          direction="row"
          justifyContent={{ xs: "center", sm: "flex-start" }}
        >
          {list_socialMedia}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default FooterPart2;

const sx_container = {
  backgroundColor: "background.footerDown",
  alignItems: "center",
  py: 1,
};

const sx_GridItem1 = {
  textAlign: { xs: "center", sm: "right" },
};

const sx_GridItem2 = {
  textAlign: { xs: "center", sm: "left" },
};
