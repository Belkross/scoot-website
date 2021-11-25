import React from "react";
import Box from "@mui/material/Box";

export default function ContainerVertical({ children }) {
	return <Box sx={sx_container}>{children}</Box>;
}

const sx_container = {
	display: "flex",
	flexFlow: "column nowrap",
	minHeight: "100vh",
};

/*
Problem : when the content of <main/> has no enough height, footer don’t stick to bottom
Solution: the minimum height of the app is 100vh and its display is flex,
header’s and footer’s height are fixed. <main/> has a non null flexGrow 
that will allow him to stretch. 
to work you also need to wrap <main/> with this css: 
IMPORTANT: header and footer need to be placed between A and B VerticalLayoutContainer

const sx_container = {
	// to make sure footer always well positioned
	flexGrow: 1,
	//to make sure when content is centered when <main> stretch
	display: "flex",
	flexFlow: "column nowrap",
	justifyContent: "center",
	// to make sure footer don’t stick header
	minHeight: "200px",
};
*/
