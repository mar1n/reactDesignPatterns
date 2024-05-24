import React from "react";
import { render } from "@testing-library/react";

const Title = (props) => props.render();

const RenderProps = () =>
render(
  <div className='App'>
    <Title
      render={() => (
        <h1>
          <span role='img' aria-label='emoji'></span>I am a render prop!{" "}
          <span role='img' aria-label='emoji'></span>
        </h1>
      )}
    />
  </div>
);

export default RenderProps