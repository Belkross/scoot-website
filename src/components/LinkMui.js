import React from "react";
import { Link } from "gatsby";
import { useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

function LinkMui(props) {
  const theme = useTheme();
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${theme.palette.text.primary};
    padding: 8px;
    border-radius: ${theme.shape.borderRadius}px;
    &:hover {
      background-color: rgba(125, 125, 125, 0.35);
    }
  `;

  return (
    <StyledLink
      to={props.to}
      activeStyle={{
        backgroundColor: "rgba(125,125,125, 0.75)",
      }}
      children={props.children}
      onClick={props.onClick} //s’applique à la balise <a>
      className="LinkMui"
    />
  );
}

export default LinkMui;

/*
  les styles hover et actif sont difficiles à concilier avec le dark mode. Dans d’idéal, il faudrait
  du clair en dark et du foncé en light. À moins d’avoir accès au contexte du mode, j’ai trouvé 
  pertinent de jouer avec l’opacité pour ne pas avoir à définir deux couleurs.
*/
