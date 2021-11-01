import React from "react";
import Box from "@mui/material/Box";

function ContainerVertical({ children }) {
  return <Box sx={sx_container}>{children}</Box>;
}

export default ContainerVertical;
//to make sure footer well positioned even if content is small
const sx_container = {
  display: "flex",
  flexFlow: "column nowrap",
  minHeight: "100vh",
};
