import styled from "styled-components";
import { useState, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "../components/common/Header/Header";
import routes from "./routes";

const Content = styled.div`
  margin-top: ${(props) => (props.header ? "80px" : "0px")};
  width: 100%;
  min-height: ${(props) => (props.header ? "calc(100vh - 80px)" : "100vh")};
  display: flex;
  justify-content: center;
`;

const Background = styled.div`
  min-height: 100vh;
  /* width: 1920px; */

  display: flex;
  flex-direction: column;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;

  box-sizing: border-box;
`;

const Router = () => {
  const location = useLocation();

  const [renderInfo, setRenderInfo] = useState({
    header: false,
  });

  useLayoutEffect(() => {
    const temp = routes.find((e) => {
      if (e.path.includes(location.pathname.split("/")[1])) {
        setRenderInfo(e);
      }
    });
  }, [location.pathname]);

  return (
    <Background>
      {renderInfo.header && <Header />}
      <Content header={renderInfo}>
        <Routes>
          {routes.map((element) => {
            // console.log(element.path, element.header);
            return <Route path={element.path} element={element.component} key={element.path} />;
          })}
        </Routes>
      </Content>
    </Background>
  );
};

export default Router;
