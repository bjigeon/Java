import React, { useRef } from "react";
import * as M from "./Main.style";
import Edit from "../../assets/img/Main/Edit.png";
import File from "../../assets/img/Main/File.png";
import { useNavigate } from "react-router-dom";

import List from "../List/List";

const Main = () => {
  const navigate = useNavigate();
  const refs = useRef();

  const scrollList = () => {
    window.scrollTo({ top: refs.current.clientHeight + 276, left: 0, behavior: "smooth" });
  };

  return (
    <M.Container>
      <M.IntroduceContainer ref={refs}>
        <M.TextContainer>
          <h1>
            작성된 게시물들을
            <br /> 구경해 보세요!
          </h1>
          <button onClick={scrollList}>게시물 보러가기</button>
        </M.TextContainer>
        {/* <Style /> */}
        <M.Img />
        <M.CircleImage />
      </M.IntroduceContainer>

      <M.FunctionContainer>
        <M.IntroduceFunction>
          <M.ImgContainer>
            <img src={File} />
          </M.ImgContainer>
          <div id="container">
            <h3>게시물 수정</h3>
            <p>
              내가 작성한 게시물에 들어가면
              <br /> 언제든지 게시물을 수정할 수 있습니다
            </p>
          </div>
        </M.IntroduceFunction>
        <M.IntroduceFunction>
          <M.ImgContainer>
            <img src={Edit} />
          </M.ImgContainer>
          <div id="container">
            <h3>게시물 작성</h3>
            <p>지금 바로 게시물을 작성해 보세요</p>
            <button onClick={() => navigate("/write")}>바로가기</button>
          </div>
        </M.IntroduceFunction>
      </M.FunctionContainer>

      <List />
    </M.Container>
  );
};

export default Main;
