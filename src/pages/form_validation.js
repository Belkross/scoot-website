import React from "react";
import Layout from "../components/Layout/Layout";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";

const TEXT =
  "Le formulaire a été soumis avec succés. Vous pouvez reprendre votre navigation.";

function PageFormValidation() {
  return (
    <Layout>
      <Container>
        <Alert severity="success" children={TEXT} />
      </Container>
    </Layout>
  );
}

export default PageFormValidation;
