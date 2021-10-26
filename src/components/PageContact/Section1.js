import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Section1() {
  return (
    <Stack component="section" sx={sx_container}>
      <form name="contact" data-netlify="true" style={style_form} method="POST" action="/form_validation" subject="contact depuis www.belkross.com">
        <input type="hidden" name="form-name" value="contact" />
        <TextField label="Nom" name="nom"/>
        <TextField label="Message" name="message" multiline sx={sx_message}/>
        <Button type="submit">Valider</Button>
      </form>
    </Stack>
  );
}

export default Section1;

const sx_container = {
  alignItems: "center",
  p: 4,
};

const style_form = {
  display: "flex",
  alignItems: "center",
  gap: 12
}

const sx_message = {
  minWidth: "400px"
}