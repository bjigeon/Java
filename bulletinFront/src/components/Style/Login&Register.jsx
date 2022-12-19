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

  z-index: -1;
`;

const Box = styled.div`
  width: 1920px;
`;

const Style = () => {
  const [style, setStyle] = useState([
    {
      width: 51,
      height: 51,
      left: 271,
      top: 308,

      background: "5A62B1",
    },
    {
      width: 413,
      height: 413,
      left: 96,
      top: 609,
      background: "FFF5DA",
    },
    {
      width: 267,
      height: 267,
      left: 1207,
      top: 606,
      background: "5A62B1",
    },
    {
      width: 406,
      height: 406,
      left: 500,
      top: 120,
      background: "F5F9FF",
    },
    {
      width: 68,
      height: 68,
      left: 1087,
      top: 968,
      background: "9BD0EC",
    },
    {
      width: 158,
      height: 158,
      left: 1474,
      top: 323,
      background: "FFF5DA",
    },
    {
      width: 129,
      height: 129,
      left: 1807,
      top: 816,
      background: "85C6C6",
    },
    {
      width: 30,
      height: 30,
      left: 1742,
      top: 264,
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

  return <Box>{makeStyle}</Box>;
};

export default Style;
