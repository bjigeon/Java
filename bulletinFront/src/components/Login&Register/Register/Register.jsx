import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../Main.style";

const Register = () => {
  const navigate = useNavigate();

  const [same, setSame] = useState("");

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");

  const saveId = (e) => {
    if (id?.length > 49) {
      alert("50자까지 입력 가능합니다");
      setId(id.substring(0, 50));
    } else {
      setId(e.target.value);
    }
  };

  const savePw = (e) => {
    if (pw?.length > 99) {
      alert("100자까지 입력 가능합니다");
      setPw(pw.substring(0, 100));
    } else {
      setPw(e.target.value);
    }
  };

  const savePwCheck = (e) => {
    if (pwCheck?.length > 99) {
      alert("100자까지 입력 가능합니다");
      setPwCheck(pwCheck.substring(0, 100));
    } else {
      setPwCheck(e.target.value);
    }
  };

  const doRegiste = () => {
    if (pw == pwCheck) {
      axios
        .post("/user/register", {
          id: id,
          pw: pw,
        })
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    } else {
      console.log("다름");
      setSame("notSame");
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
      <S.InputBox>
        <span>
          <h4>PASSWOARD 확인</h4>
          <p>최대 100자까지 입력 가능합니다.</p>
        </span>
        <input
          type="password"
          placeholder="비밀번호를 한번더 입력해 주세요."
          onChange={savePwCheck}
          id={same}
        />
      </S.InputBox>
      <button onClick={doRegiste}>회원가입</button>
    </S.InfoContainer>
  );
};

export default Register;
