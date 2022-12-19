import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: center;

  width: 640px;
  height: 759px;

  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  button {
    width: 494px;
    height: 46px;

    background: #5a62b1;
    border-radius: 10px;

    color: #fff;
    font-size: 18px;

    outline: none;
    border: none;

    cursor: pointer;
    :hover {
      background-color: skyblue;
      transition: 1s;
    }
  }
`;

export const InputBox = styled.div`
  width: 494px;
  height: 133px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;

  span {
    display: flex;
    align-items: center;

    h4 {
      font-size: 24px;
      color: #1f1f1f;

      margin: 0;
    }

    p {
      margin: 0;
      margin-left: 34px;

      font-weight: 400;
      font-size: 18px;
      color: #ababab;
    }
  }

  input {
    width: 494px;
    height: 80px;

    background: #ffffff;
    border: 1px solid #dbdbdb;
    border-radius: 20px;

    outline: none;

    font-weight: 400;
    font-size: 18px;
    line-height: 26px;

    box-sizing: border-box;
    padding: 24px;

    ::placeholder {
      color: #abab;
    }
  }
`;
