import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

function DialogAction({ title, description, buttons, open, close }) {
  const titleId = `dialog-title-${title}`;
  const descriptionId = `dialog-description-${title}`;
  const list_buttons = buttons.map((button) => {
    return <Button key={button.name} children={button.name} onClick={close} />;
  });

  return (
    <Dialog
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      open={open}
      onClose={close}
    >
      <DialogTitle id={titleId}>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id={descriptionId}>{description}</DialogContentText>
      </DialogContent>
      <DialogActions>{list_buttons}</DialogActions>
    </Dialog>
  );
}

export default DialogAction;

/*
modèle content en entrée : 
const Dialog = {
  title: "Téléchargement de l’application Scootin",
  description:
    "Ce site est une démonstration et l’application Scootin n’existe pas réellement.",
  buttons: [{ name: "J’ai compris" }, { name: "J’ai pas compris" }],
};

pour des effets de bord avancés avec les boutons, 
il faut ajouter des fonctions dans les tableaux
*/
