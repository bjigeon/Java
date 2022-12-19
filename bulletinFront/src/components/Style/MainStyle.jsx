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

const Style = ({ stile }) => {
  const [style, setStyle] = useState([
    {
      width: 31,
      height: 31,
      left: 136,
      top: 350 - 80,
      background: "85C6C6",
    },
    {
      width: 53,
      height: 53,
      left: 1032,
      top: 143 - 80,
      background: "A2D0EA",
    },
    {
      width: 500,
      height: 500,
      left: 1221,
      top: 205 - 80,
      background: "F5F9FF",
    },
    {
      width: 30,
      height: 30,
      left: 1833,
      top: 205 - 80,
      background: "FFF5DA",
    },
    {
      width: 26,
      height: 26,
      left: 1254,
      top: 756 - 80,
      background: "5A62B1",
    },
    {
      width: 413,
      height: 413,
      left: -207,
      top: 1596 - 80,
      background: "FFF5DA",
    },
    {
      width: 770,
      height: 770,
      left: 1418,
      top: 1759 - 80,
      background: "5A62B1",
    },
    {
      width: 53,
      height: 53,
      left: 1803,
      top: 1458 - 80,
      background: "85C6C6",
    },
    {
      width: 26,
      height: 26,
      left: 1019,
      top: 1255 - 80,
      background: "9BD0EC",
    },
    {
      width: 68,
      height: 68,
      left: 1304,
      top: 2680 - 80,
      background: "9BD0EC",
    },
    {
      width: 846,
      height: 846,
      left: 12,
      top: 2621 - 80,
      background: "F5F9FF",
    },
  ]);

  useEffect(() => {
    setStyle([...style, ...stile]);
  }, [stile]);

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
