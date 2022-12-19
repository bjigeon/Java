import React, { useId, useState } from "react";
import * as S from "./Wrtie.style";
import WriteStyle from "../Style/WriteStyle";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Write = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [userId, setUserId] = useState("");
  const [userToken, setUserToken] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [writer, setWriter] = useState("아이디로 대체됩니다");
  const [path, setPath] = useState("");

  let url;
  useEffect(() => {
    setUserId(localStorage.getItem("igmyeong_id"));
    setUserToken(localStorage.getItem("igmyeong_token"));

    setWriter(localStorage.getItem("igmyeong_id"));
    url = location.pathname.split("/")[2];

    if (location.pathname.split("/").includes("write")) {
      setPath("write");
    } else if (location.pathname.split("/").includes("edit")) {
      setPath("eidt");
      //받고 데이터 바꾸기
      axios
        .get(`/view/${url}`)
        .then((res) => {
          setTitle(res.data.title);
          setContent(res.data.content);
          setWriter(res.data.writer);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const sendData = () => {
    console.log(title);
    console.log(content);
    console.log(userToken);
    console.log(userId);

    if (!(userId && userToken)) {
      alert("로그인후 이용 가능합니다");
      navigate("/");
    }

    if (path == "write") {
      console.log("작성");

      axios
        .post(
          `/write`,
          { title: title, content: content },
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("수정");
      url = location.pathname.split("/")[2];

      axios
        .patch(
          `/update/${url}`,
          { title: title, content: content },
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    }

    navigate("/");
  };

  const saveTitle = (e) => {
    if (title?.length > 99) {
      alert("100자까지 입력 가능합니다");
      setTitle(title.substring(0, 100));
    } else {
      setTitle(e.target.value);
    }
  };

  const saveContent = (e) => {
    if (content?.length > 999) {
      alert("1000자까지 입력 가능합니다");
      setContent(content.substring(0, 1000));
    } else {
      setContent(e.target.value);
    }
  };

  // const saveWriter = (e) => {
  //   if (writer?.length > 49) {
  //     alert("50자까지 입력 가능합니다");
  //     setWriter(writer.substring(0, 50));
  //   } else {
  //     setWriter(e.target.value);
  //   }
  // };

  return (
    <S.Container>
      <WriteStyle />
      <S.WriteBox>
        <S.WriteContainer>
          <div>
            <button onClick={sendData}>{path === "write" ? "작성" : "수정"}</button>
            <S.Write>
              <span>
                <h4>제목</h4>
                <p>최대 100자까지 입력 가능합니다.</p>
              </span>
              <textarea
                id="title"
                placeholder="제목을 입력해 주세요."
                onChange={saveTitle}
                value={title}
              ></textarea>
            </S.Write>
            <S.Write>
              <span>
                <h4>내용</h4>
                <p>최대 1000자까지 입력 가능합니다.</p>
              </span>
              <textarea
                id="content"
                placeholder="내용을 입력해 주세요."
                onChange={saveContent}
                value={content}
              ></textarea>
            </S.Write>
            {/* <S.Write>
              <span>
                <h4>글쓴이</h4>
                <p>최대 50자까지 입력 가능합니다.</p>
              </span>
              <textarea
                readOnly
                id="writer"
                placeholder="글쓴이를 입력해 주세요."
                // onChange={saveWriter}
                value={writer}
              ></textarea>
            </S.Write> */}
          </div>
        </S.WriteContainer>
      </S.WriteBox>
    </S.Container>
  );
};

export default Write;
