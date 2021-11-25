import React from "react";
import PointIllustration from "../PointIllustration.js";
import Stack from "@mui/material/Stack";

export default function Section(props) {
	const content = props.content.components[0].componentBlocks[0];

	return (
		<Stack>
			<PointIllustration
				title={props.content.title}
				description={content.description}
				illustration={content.illustration.gatsbyImageData}
				illustration_alt={content.illustration.alt}
        direction="row"
			/>
		</Stack>
	);
}
