import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Contact from "../MyComponents/Contact";

function FooterPart1(props) {
  const { contact } = props.content;
  return (
    <Box sx={sx_container}>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={8} textAlign="center" component="section">
            <Download content={props.content} />
          </Grid>
          <Grid item xs={12} md={4} textAlign="center" component="section">
            <Typography
              variant="h4"
              component="p"
              children="Nous contacter"
              color="white"
              mb={3}
            />
            <Contact
              color="white"
              name={contact.name}
              addressLine1={contact.address[0]}
              addressLine2={contact.address[1]}
              addressLine3={contact.address[2]}
              phone="01 23 45 67 89"
              mail={contact.mail}
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
  return (
    <Grid container sx={sx_Download} spacing={3}>
      <Grid item xs={12} md={12}>
        <Typography
          variant="h3"
          component="h2"
          children={content.download.title}
          color="secondary.main"
        />
      </Grid>
      <Grid item xs={12} sm={6} textAlign={{ xs: "center", sm: "right" }}>
        <IconButton>
          <img
            src={content.download.icon1.publicURL}
            alt={content.download.icon_alt1}
          />
        </IconButton>
      </Grid>
      <Grid item xs={12} sm={6} textAlign={{ xs: "center", sm: "left" }}>
        <IconButton>
          <img
            src={content.download.icon2.publicURL}
            alt={content.download.icon_alt2}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
}

const sx_container = {
  py: 10,
  width: "100%",
  backgroundColor: "primary.dark",
};

const sx_Download = {
  maxWidth: { xs: "none", md: 600 },
  textAlign: "center",
};
