import React from "react";
import PointIllustrated from "../PointIllustrated";

function Part1(props) {
  const { content } = props;
  return (
    <article>
      <PointIllustrated
        title={content.title}
        description={content.description}
        illustration={content.illustration}
        alt={content.illustration_alt}
        button={content.button}
        direction="row"
      />
    </article>
  );
}

export default Part1;
