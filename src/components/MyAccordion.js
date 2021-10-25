import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconChevron from "../assets/icons/IconChevron.js";

function MyAccordion({ summary, details }) {
  return (
    <Box component="article">
      <Accordion sx={sx_Accordion}>
        <AccordionSummary>
          <Stack sx={sx_stackSummary}>
            <Typography variant="h4" children={summary} />
            <IconChevron />
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography children={details} />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default MyAccordion;

const sx_stackSummary = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
};

const sx_Accordion = {
  boxShadow: "none",
  maxWidth: "600px",
};
