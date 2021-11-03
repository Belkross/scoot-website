import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function Contact({
  name,
  addressLine1,
  addressLine2,
  addressLine3,
  addressLine4,
  mail,
  phone,
  color,
}) {
  return (
    <Stack component="address" sx={{ fontStyle: "normal", gap: 2 }}>
      <Stack>
        <Typography color={color}>{name}</Typography>
        <Typography color={color}>{addressLine1}</Typography>
        <Typography color={color}>{addressLine2}</Typography>
        <Typography color={color}>{addressLine3}</Typography>
        <Typography color={color}>{addressLine4}</Typography>
      </Stack>
      <Stack>
        <Typography color={color}>{phone}</Typography>
        <Typography color={color}>{mail}</Typography>
      </Stack>
    </Stack>
  );
}

export default Contact;
