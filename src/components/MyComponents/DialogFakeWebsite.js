import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
export const DialogFakeWebsiteContext = React.createContext();
const CONTENT = {
	title: "Feature don’t exist",
	description: "This is just a demonstration website",
	buttons: [{ name: "I understand" }, { name: "You fooled me !" }],
};

export default function DialogFakeWebsite({ children }) {
	const { title, description, buttons } = CONTENT;
	const [dialogDisplay, setDialogDisplay] = useState(false);
	const toggleDialog = () => {
		setDialogDisplay((prevDisplay) => !prevDisplay);
	};

	const titleId = `dialog-title-${title}`;
	const descriptionId = `dialog-description-${title}`;
	const list_buttons = buttons.map((button) => {
		return <Button key={button.name} children={button.name} onClick={toggleDialog} />;
	});

	return (
		<DialogFakeWebsiteContext.Provider value={{ dialogDisplay, toggleDialog }}>
			<Dialog
				aria-labelledby={titleId}
				aria-describedby={descriptionId}
				open={dialogDisplay}
				onClose={toggleDialog}
			>
				<DialogTitle id={titleId}>{title}</DialogTitle>
				<DialogContent>
					<DialogContentText id={descriptionId}>{description}</DialogContentText>
				</DialogContent>
				<DialogActions>{list_buttons}</DialogActions>
			</Dialog>
			{children}
		</DialogFakeWebsiteContext.Provider>
	);
}
