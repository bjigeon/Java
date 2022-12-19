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

const Style = () => {
  const [style, setStyle] = useState([
    {
      width: 68,
      height: 68,
      left: 1817,
      top: 218,
      background: "9BD0EC",
    },
    {
      width: 770,
      height: 770,
      left: 1308,
      top: 510,
      background: "5A62B1",
    },
    {
      width: 21,
      height: 21,
      left: 1626,
      top: 412,
      background: "85C6C6",
    },
    {
      width: 28,
      height: 28,
      left: 405,
      top: 937,
      background: "5A62B1",
    },
    {
      width: 447,
      height: 447,
      left: -191,
      top: 443,
      background: "FFF5DA",
    },
    {
      width: 53,
      height: 53,
      left: 373,
      top: 417,
      background: "85C6C6",
    },
    {
      width: 24,
      height: 24,
      left: 139,
      top: 242,
      background: "9BD0EC",
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
