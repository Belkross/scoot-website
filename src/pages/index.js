import React from "react";
import { navigate } from "gatsby";

export default function PageIndex() {
  React.useEffect(() => {
    navigate("/en/home");
  }, []);

  return <div></div>;
}
