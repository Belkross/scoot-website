import React from "react";
import Button from "@mui/material/Button";
import { navigate } from "gatsby";

function Logo({ illustration, name }) {
	return (
		<Button
			startIcon={illustration}
			sx={sx_logo}
			color="inherit"
			disableElevation
			disableRipple
			size="large"
			onClick={() => navigate("/")}
		>
			{name}
		</Button>
	);
}

export default Logo;
const sx_logo = {
	fontSize: "1.5rem",
	backgroundColor: "background.navBar",
	p: "8px",
	"&:hover": {
		backgroundColor: "background.navBar",
	},
	display: { xs: "none", b4: "flex" },
};

/*cannot change the size of the logo because it’s not independant.
it’s just the icon of a button. */
