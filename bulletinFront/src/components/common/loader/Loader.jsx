import { memo } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const LoaderWrap = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Loader = memo(({ isLoaded }) => {
  return (
    <>
      {isLoaded && (
        <LoaderWrap>
          <ReactLoading type="spin" color="#5a62b1" />
        </LoaderWrap>
      )}
    </>
  );
});

const Container = memo(({ setTarget, children }) => {
  return <div ref={setTarget}>{children}</div>;
});

Loader.Container = Container;
export default Loader;
