import React from "react";
import Box from "@mui/material/Box";

export default function VerticalLayoutContainerB({ children }) {
	return <Box sx={sx_container}>{children}</Box>;
}

const sx_container = {
	// to make sure footer always well positioned
	flexGrow: 1,
	//to make sure when content is centered when <main/> stretch
	display: "flex",
	flexFlow: "column nowrap",
	justifyContent: "center",
	// to make sure footer don’t stick header
	minHeight: "200px",
};

// IMPORTANT: header and footer need to be placed between A and B VerticalLayoutContainer
