import React from "react";
import { navigate } from "gatsby";

export default function PageIndex() {
  React.useEffect(() => {
    navigate("/fr/home");
  }, []);

  return <div></div>;
}
