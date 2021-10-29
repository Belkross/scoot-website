import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CheckBox from "@mui/material/CheckBox";
import FormControlLabel from "@mui/material/FormControlLabel";

function Section1() {
  return (
    <Stack component="section" sx={sx_container}>
      <form
        name="contact"
        data-netlify="true"
        method="POST"
        action="/form_validation"
        subject="contact depuis www.belkross.com"
        style={style_form}
      >
        <input type="hidden" name="form-name" value="contact" />
        <Stack sx={sx_form}>
          <LittleFields />
          <TextField
            label="Message*"
            name="message"
            multiline
            sx={sx_message}
            minRows={8}
          />
        </Stack>
        <CheckBoxMui />
        <Button type="submit">Valider</Button>
      </form>
    </Stack>
  );
}

export default Section1;

function CheckBoxMui() {
  return (
    <FormControlLabel
      control={<CheckBox />}
      label="J’accepte la politique de confidentialité"
    />
  );
}

function LittleFields() {
  return (
    <Stack sx={sx_littleFields}>
      <TextField label="Nom*" name="nom" sx={sx_littleField} />
      <TextField label="Email*" name="email" sx={sx_littleField} />
      <TextField label="Téléphone" name="telephone" sx={sx_littleField} />
    </Stack>
  );
}

const sx_container = {
  alignItems: "center",
  p: 4,
};

const sx_form = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  justifyContent: "center",
  alignItems: { xs: "center", md: "flex-end" },
  gap: { xs: 6, md: 3 },
};

const sx_message = {
  minWidth: { xs: "280px", sm: "460px", md: "500px" },
  /* minHeight: { xs: "500px" }, */
};

const sx_littleFields = {
  gap: 3,
};

const sx_littleField = {
  minWidth: { xs: 280, sm: 350, md: 280 },
};

const style_form = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "30px",
};
