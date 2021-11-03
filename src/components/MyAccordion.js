import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function MyAccordion({ title, description }) {
  const [expansion, setExpansion] = useState(false);
  const handleClick = (event) => {
    setExpansion((prevState) => !prevState);
  };

  return (
    <Box component="article">
      <Accordion sx={sx_Accordion} expanded={expansion} onClick={handleClick}>
        <AccordionSummary>
          <Stack sx={sx_stackSummary}>
            <Typography variant="h4" children={title} />
            {expansion ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography children={description} />
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
  "&:hover": {
    backgroundColor: "rgba(125, 125, 125, .5)"
  }
};
