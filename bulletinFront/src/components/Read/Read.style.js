import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
`;

export const Bulletin = styled.div`
  width: 1000px;
  height: 700px;

  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

export const InfoContainer = styled.div`
  margin: 58px;

  textarea {
    margin-top: 23px;

    width: 884px;
    height: 400px;

    border: none;
    outline: none;
    resize: none;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #7b7b7b;

    ::-webkit-scrollbar {
      width: 10px;
      background-color: #f1f1f1;
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
      width: 9px;
      background-color: #5a62b1;
      border-radius: 5px;
    }

    ::-webkit-scrollbar-track {
    }
  }
`;

export const TitleCoontainer = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin: 0;
    width: calc(100% - 120px);

    font-size: 28px;
    color: #1f1f1f;
  }

  button {
    width: 120px;
    height: 46px;

    background: #5a62b1;
    border-radius: 10px;
    border: none;
    outline: none;

    font-size: 18px;
    color: #ffffff;

    cursor: pointer;
    :hover {
      background-color: skyblue;
      transition: 1s;
    }
  }
`;

export const DateSeeWriter = styled.div`
  margin-top: 30px;

  span {
    width: 100%;

    display: flex;
    align-items: center;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #ababab;

    img {
      width: 40px;
      height: 40px;
    }

    p {
      width: 30%;
      margin: 0px 0px 0px 14px;
    }

    a {
      width: calc(70% - 40px);
      display: flex;
      justify-content: flex-end;
    }

    button {
      height: 30px;
      width: 70px;

      border-radius: 10px;
      border: none;
      outline: none;

      background-color: #5a62b1;
      color: white;

      margin-bottom: 20px;

      cursor: pointer;
      :hover {
        background-color: rgb(129, 204, 235);
        transition: 2s;
      }
    }
  }
`;

export const ListBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin-top: 70px;

    width: 140px;
    height: 58px;

    background: #5a62b1;
    border-radius: 10px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-size: 18px;
    color: #ffffff;

    outline: none;
    border: none;
    cursor: pointer;
    :hover {
      background-color: skyblue;
      transition: 1s;
    }
  }
`;
