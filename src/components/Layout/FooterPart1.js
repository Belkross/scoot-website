import React, { useContext } from "react";
import { DialogFakeWebsiteContext } from "../MyComponents/DialogFakeWebsite";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Contact from "../MyComponents/Contact";

function FooterPart1(props) {
  const { content } = props;

  return (
    <Box sx={sx_container} component="section">
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={8} textAlign="center" component="article">
            <Download content={content} />
          </Grid>
          <Grid item xs={12} md={4} textAlign="center" component="article">
            <Typography
              variant="h4"
              component="p"
              children="Contact"
              color="primary.light"
              mb={3}
            />
            <Contact
              name={content.name}
              addressLine1={content.line1}
              addressLine2={content.line2}
              addressLine3={content.line3}
              addressLine4={content.line4}
              phone={content.phone}
              mail={content.mail}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default FooterPart1;

function Download(props) {
  const { content } = props;
  const context = useContext(DialogFakeWebsiteContext);
  return (
    <Grid container sx={sx_Download} spacing={3}>
      <Grid item xs={12} md={12}>
        <Typography
          variant="h3"
          component="h2"
          children={content.title}
          color="secondary.main"
        />
      </Grid>
      <Grid item xs={12} sm={6} textAlign={{ xs: "center", sm: "right" }}>
        <IconButton onClick={context.toggleDialog}>
          <img src={content.icons[0].url} alt={content.icons[0].alt} />
        </IconButton>
      </Grid>
      <Grid item xs={12} sm={6} textAlign={{ xs: "center", sm: "left" }}>
        <IconButton onClick={context.toggleDialog}>
          <img src={content.icons[1].url} alt={content.icons[1].alt} />
        </IconButton>
      </Grid>
    </Grid>
  );
}

const sx_container = {
  py: 10,
  width: "100%",
  backgroundColor: "background.footerUp",
};

const sx_Download = {
  maxWidth: { xs: "none", md: 600 },
  textAlign: "center",
};
