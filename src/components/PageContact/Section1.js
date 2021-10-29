import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";

/* 
  netlify form

  add required to fields that need it.
  to connect form with netlify:
    <form data-netlify="true" method="POST" name="<netlify field>"> 
    <input type="hidden" name="form-name" value="<form name>" />
    </form>
  to avoid netlify’s validation message on submit: 
    action="/<page url>"
*/

function Section1() {
  return (
    <Stack component="section">
      <form
        name="Formulaire de contact"
        data-netlify="true"
        method="POST"
        action="/form_validation"
        subject="contact depuis www.belkross.com"
        style={style_form}
      >
        <input type="hidden" name="form-name" value="Formulaire de contact" />
        <ContactFormComponents />
      </form>
    </Stack>
  );
}

export default Section1;

function ContactFormComponents() {
  return (
    <Grid container sx={sx_inputs} spacing={3}>
      <Grid item xs={12} md={4}>
        <Stack spacing={3}>
          <TextField label="Nom" name="nom" sx={sx_StackTextField} required />
          <TextField
            label="Email"
            name="email"
            sx={sx_StackTextField}
            required
          />
          <TextField label="Téléphone" name="phone" sx={sx_StackTextField} />
        </Stack>
      </Grid>
      <Grid item xs={12} md={8}>
        <TextField
          label="Message"
          name="message"
          multiline
          sx={sx_message}
          minRows={8}
          required
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <FormControlLabel
          control={<Checkbox required />}
          label="J’accepte la politique de confidentialité"
        />
      </Grid>
      <Grid item xs={12} md={4} sx={sx_GridSubmitButton}>
        <Button type="submit">Valider</Button>
      </Grid>
    </Grid>
  );
}

const style_form = {
  margin: "auto",
};

const sx_inputs = {
  maxWidth: { sm: 600, md: 900, lg: 1100 },
  mb: { xs: 10, md: 14 },
  alignItems: "flex-end",
};

const sx_StackTextField = {
  width: "100%",
};

const sx_message = {
  width: "100%",
};

const sx_GridSubmitButton = {
  textAlign: { xs: "center", md: "right" },
};
