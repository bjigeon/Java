import React, { useCallback, useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import * as L from "./List.style";
import Eye from "../../assets/img/List/Eye.png";
import Time from "../../assets/img/List/Time.png";
import Loader from "../common/loader/Loader";
import Style from "../Style/MainStyle";
import axios from "axios";

const List = () => {
  const [content, setContent] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [ref, inView] = useInView();
  const [loading, setLoading] = useState(false);
  const [dataEnd, setDataEnd] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    axios
      .get(`/list?page=${page}&size=9&sort=id,desc`)
      .then((res) => {
        if (res.data.length == 0 || res.data.length < 9) {
          setDataEnd("True");
        }

        setContent([...content, ...res.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [location.pathname]);

  const getItems = useCallback(async () => {
    setLoading(true);
    if (dataEnd != "True") {
      await axios
        .get(`/list?page=${page}&size=9&sort=id,desc`)
        .then((res) => {
          if (res.data.length == 0) {
            setDataEnd("True");
          }
          setContent([...content, ...res.data]);
        })
        .catch((error) => {
          console.log(error);
        });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setLoading(false);
    }
  }, [page]);

  const [style, setStyle] = useState([{}]);
  const [style_y, setStyle_y] = useState(3000);

  const makeRandomStyle = () => {
    const color = ["F5F9FF", "F5F9FF", "85C6C6", "A2D0EA"];
    let randColor = Math.floor(Math.random() * 4);
    let randWidth = Math.floor(Math.random() * (900 - 400 + 1)) + 400;
    let randY = Math.floor(Math.random() * (900 - 400 + 1)) + 400;
    let randX = Math.floor(Math.random() * 1700);

    if (randX > 1500) {
      randX -= 1500;
      randX *= -1;
    }

    setStyle_y(style_y + randWidth + randY);

    setStyle([
      {
        width: randWidth,
        height: randWidth,
        left: randX,
        top: style_y,
        background: color[randColor],
      },
    ]);
    // console.log(style);
    // console.log(style_y);
  };

  useEffect(() => {
    makeRandomStyle();
    makeRandomStyle();
    makeRandomStyle();
    getItems();
  }, [getItems]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView, loading]);

  const onChildClick = useCallback((e, data) => {
    e.stopPropagation();

    let userId = localStorage.getItem("igmyeong_id");
    let userToken = localStorage.getItem("igmyeong_token");

    navigate(`/edit/${data.id}`);
  }, []);

  const makeList = content.map((data, idx, arr) => {
    return (
      <L.Board key={idx}>
        {arr.length - 1 == idx ? (
          <div onClick={() => navigate(`/bulletin/${data.id}`)}>
            <h3>{data.title}</h3>
            <p>{data.content}</p>
            <div ref={ref}>
              <L.InfoContainer>
                <span>
                  <img src={Time} />
                  <p>{data.date}</p>
                  <button onClick={(e) => onChildClick(e, data)}>수정</button>
                </span>
                <span>
                  <img src={Eye} />
                  <p>{data.see} 회</p>
                  <a>{data.writer}</a>
                </span>
              </L.InfoContainer>
            </div>
          </div>
        ) : (
          <div onClick={() => navigate(`/bulletin/${data.id}`)}>
            <h3>{data.title}</h3>
            <p>{data.content}</p>
            <div ref={ref}>
              <L.InfoContainer>
                <span>
                  <img src={Time} />
                  <p>{data.date}</p>
                  <button onClick={(e) => onChildClick(e, data)}>수정</button>
                </span>
                <span>
                  <img src={Eye} />
                  <p>{data.see} 회</p>
                  <a>{data.writer}</a>
                </span>
              </L.InfoContainer>
            </div>
          </div>
        )}
      </L.Board>
    );
  });

  return (
    <>
      <Style stile={style} />
      <L.Container>
        <L.ContentContainer>
          <L.TextContainer>
            <p>게시물은 최신순으로 표시됩니다.</p>
            <h3>게시물 목록</h3>
          </L.TextContainer>
          <L.ListContainer>
            {makeList}
            <Loader isLoaded={loading} />
          </L.ListContainer>
        </L.ContentContainer>
      </L.Container>
    </>
  );
};

export default List;
