import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as H from "./Header.style";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [nickName, setNickName] = useState("");

  useEffect(() => {
    setNickName(localStorage.getItem("igmyeong_id"));
  }, [location.pathname]);

  const log = () => {
    if (nickName) {
      setNickName("");
      localStorage.removeItem("igmyeong_id");
      localStorage.removeItem("igmyeong_token");
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <H.Header>
      <H.InfoContainer>
        <p id="appName">
          <h3>게</h3>시판
        </p>
        <a id="home" href="/">
          홈
        </a>
        <a id="write" href="/write">
          글 쓰기
        </a>
      </H.InfoContainer>
      <H.User>
        {nickName ? (
          <>
            {nickName} <p>님</p>
          </>
        ) : null}

        <H.Logout onClick={log}>{nickName ? "로그아웃" : "로그인, 회원가입"}</H.Logout>
      </H.User>
    </H.Header>
  );
};

export default Header;
