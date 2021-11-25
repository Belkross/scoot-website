import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { GatsbyImage } from "gatsby-plugin-image";

export default function PointIllustration(props) {
	const { title, description, illustration, illustration_alt, direction } = props;

	return (
		<Stack
			component="article"
			sx={sx_container}
			direction={{
				xs: "column",
				md: direction === "row-reverse" ? "row-reverse" : "row",
			}}
		>
			<Stack sx={sx_text}>
				<Typography variant="h2" children={title} />
				<Typography children={description} />
			</Stack>
			<GatsbyImage image={illustration} style={style_image} alt={illustration_alt} />
		</Stack>
	);
}

const sx_container = {
	justifyContent: "center",
	alignItems: "center",
	mb: 8,
	gap: 6,
};

const sx_text = {
	maxWidth: 550,
	alignItems: "center",
	textAlign: { xs: "center", md: "left" },
	flexShrink: 2,
	gap: 3,
};

const style_image = {
	borderRadius: "50%",
	maxHeight: "400px",
	maxWidth: "400px",
};
