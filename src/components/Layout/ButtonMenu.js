import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import NavBarLinkSelector from "../NavBarLinkSelector.js";
import AppBarLateral from "../MyComponents/AppBarLateral.js";

function ButtonMenu(props) {
	const [drawerDisplay, setDrawerDisplay] = useState(false);
	const toggleDrawer = () => {
		setDrawerDisplay((prevState) => !prevState);
	};

	const list_tabs = props.tabs.map((tab) => {
		return (
			<NavBarLinkSelector
				key={tab.id}
				slug={tab.slug}
				anchor={tab.anchor}
				linkType={tab.model.apiKey}
				menuItems={tab.menuItems}
				locale={props.locale}
				onClick={toggleDrawer}
			/>
		);
	});

	return (
		<Box display="inline">
			<IconButton
				variant="navigation"
				onClick={toggleDrawer}
				children={<MenuIcon />}
				aria-label="toggle side navigation bar"
			/>
			<Drawer anchor="right" open={drawerDisplay} onClose={toggleDrawer}>
				<AppBarLateral>
					<Stack spacing={1} alignItems="center">
						{list_tabs}
					</Stack>
				</AppBarLateral>
			</Drawer>
		</Box>
	);
}

export default ButtonMenu;

/*
  by default Toolbar is flex component with align-items: center
*/
