import React from "react";
import Button from "@mui/material/Button";
import { scroller } from "react-scroll";

function ButtonMainAction({ children }) {
  return (
    <Button
      children={children}
      onClick={() =>
        scroller.scrollTo("footer", {
          duration: 800,
          smooth: "easeInOutQuart",
        })
      }
    />
  );
}

export default ButtonMainAction;
