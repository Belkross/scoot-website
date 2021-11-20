import React from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButtonLink from "../MyComponents/IconButtonLink";

function FooterPart2(props) {
  const { content } = props;

  const list_socialMedia = content.externalWebsite.map((site) => {
    return (
      <IconButtonLink
        key={site.name}
        icon={site.icon.url}
        alt={site.icon.alt}
        website={site.url}
      />
    );
  });

  return (
    <Grid component="section" container sx={sx_container} spacing={1}>
      <Grid item sx={sx_GridItem1} xs={12} sm={6}>
        <Typography color="primary.light">{content.copyright}</Typography>
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
