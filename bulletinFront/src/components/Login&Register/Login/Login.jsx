import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../util/api";
import userInfo from "../../../global/user";
import * as S from "../Main.style";

// "proxy": "http://localhost:8080/",

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const navigate = useNavigate();

  const saveId = (e) => {
    if (id?.length > 49) {
      alert("아이디는 최대 50자까지 가능합니다.");
      setId(id.substring(0, 50));
    } else {
      setId(e.target.value);
    }
  };

  const savePw = (e) => {
    if (pw?.length > 99) {
      alert("비밀번호는 최대 100자까지 가능합니다.");
      setPw(pw.substring(0, 100));
    } else {
      setPw(e.target.value);
    }
  };

  const doLogin = () => {
    if (id != "" && pw != "") {
      axios
        .post("/user/login", {
          id: id,
          pw: pw,
        })
        .then((result) => {
          localStorage.setItem("igmyeong_token", result.data.token);
          localStorage.setItem("igmyeong_id", result.data.id);

          console.log(localStorage.getItem("igmyeong_id"));
          console.log(localStorage.getItem("igmyeong_token"));
          navigate("/");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    } else {
      alert("비밀번호 또는 id가 비어있습니다");
    }
  };

  return (
    <S.InfoContainer>
      <S.InputBox>
        <span>
          <h4>ID</h4>
          <p>최대 50자까지 입력 가능합니다.</p>
        </span>
        <input type="id" placeholder="id를 입력해 주세요." onChange={saveId} />
      </S.InputBox>
      <S.InputBox>
        <span>
          <h4>PASSWAORD</h4>
          <p>최대 100자까지 입력 가능합니다.</p>
        </span>
        <input type="password" placeholder="비밀번호를 입력해 주세요." onChange={savePw} />
      </S.InputBox>
      <a onClick={() => navigate("/register")}>회원가입</a>
      <button onClick={doLogin}>로그인</button>
    </S.InfoContainer>
  );
};

export default Login;
