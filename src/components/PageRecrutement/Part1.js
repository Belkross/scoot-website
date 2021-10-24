import React from "react";
import MainPoint from "../MainPoint";

function Part1(props) {
  const { content } = props;
  return (
    <div>
      <MainPoint
        title={content.title}
        description={content.description}
        illustration={content.illustration}
        button={content.button}
        direction="row"
      />
    </div>
  );
}

export default Part1;
