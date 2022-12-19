import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Circle = styled.div`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};

  position: absolute;
  left: ${(props) => `${props.left}px`};
  top: ${(props) => `${props.top}px`};

  background-color: ${(props) => `#${props.color}`};
  transform: ${(props) => props.transform};

  border-radius: ${(props) => `${props.height}px`};

  /* z-index: -1; */
`;

const Style = () => {
  const [style, setStyle] = useState([
    {
      width: 413,
      height: 413,
      left: 1440,
      top: 107,
      background: "FFF5DA",
    },
    {
      width: 51,
      height: 51,
      left: 230,
      top: 297,
      background: "5A62B1",
    },
    {
      width: 68,
      height: 68,
      left: 1432,
      top: 893,
      background: "9BD0EC",
    },
    {
      width: 32,
      height: 32,
      left: 1751,
      top: 767,
      background: "85C6C6",
    },
    {
      width: 504,
      height: 504,
      left: 83,
      top: 741,
      background: "F5F9FF",
    },
    {
      width: 30,
      height: 30,
      left: 113,
      top: 566,
      background: "FFF5DA",
    },
  ]);

  const makeStyle = style.map((e, idx) => {
    return (
      <Circle
        key={idx}
        color={e.background}
        width={e.width}
        height={e.height}
        left={e.left}
        top={e.top}
        transform={e.transform}
      />
    );
  });

  return <>{makeStyle}</>;
};

export default Style;
