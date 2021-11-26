import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function Contact(props) {
  const firstPart = [
    props.name,
    props.addressLine1,
    props.addressLine2,
    props.addressLine3,
    props.addressLine4,
  ];
  const secondPart = [props.phone, props.mail];

  const list_firstPart = firstPart.map((line) => {
    return <Typography key={line} color="text.light" children={line} />;
  });
  const list_secondPart = secondPart.map((line) => {
    return <Typography key={line} color="text.light" children={line} />;
  });

  return (
    <Stack component="address" sx={{ fontStyle: "normal", gap: 2 }}>
      <Stack>{list_firstPart}</Stack>
      <Stack>{list_secondPart}</Stack>
    </Stack>
  );
}

export default Contact;
