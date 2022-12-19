import React, { useLayoutEffect, useState } from "react";
import * as S from "./Read.style";
import ReadStyle from "../Style/ReadStyle";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Eye from "../../assets/img/Read/Eye.png";
import Time from "../../assets/img/Read/Time.png";

const Read = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let id = location.pathname.split("/")[2];

    axios
      .get(`/view/${id}`)
      .then((res) => {
        setContent(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [content, setContent] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });

  return (
    <S.Container>
      <ReadStyle />
      <S.Bulletin>
        <S.InfoContainer>
          <S.TitleCoontainer>
            <h3>{content.title}</h3>
            <button onClick={() => navigate(`/edit/${content.id}`)}>수정</button>
          </S.TitleCoontainer>
          <textarea value={content.content} spellCheck="false" readOnly></textarea>
          <S.DateSeeWriter>
            <span>
              <img src={Time} />
              <p>{content.date}</p>
            </span>
            <span id="see">
              <img src={Eye} />
              <p>{content.see} 회</p>
              <a>{content.writer}</a>
            </span>
          </S.DateSeeWriter>
        </S.InfoContainer>
        <S.ListBtn>
          <button id="list" onClick={() => navigate("/")}>
            목록
          </button>
        </S.ListBtn>
      </S.Bulletin>
    </S.Container>
  );
};

export default Read;
