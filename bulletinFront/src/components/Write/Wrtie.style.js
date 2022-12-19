import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
`;

export const WriteBox = styled.div`
  position: relative;
`;

export const WriteContainer = styled.div`
  width: 1280px;
  height: 759px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      position: absolute;
      left: 1080px;
      top: 60px;

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
  }
`;

export const Write = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    height: 35px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;

    h4 {
      margin: 0;
      font-size: 24px;
      /* line-height: 35px; */
      color: #1f1f1f;
    }

    p {
      width: 300px;
      margin: 0px 0px 0px 14px;
      font-weight: 400;
      font-size: 18px;
      /* line-height: 26px; */
      color: #ababab;
    }
  }

  textarea {
    width: 1120px;
    font-size: 18px;

    resize: none;
    outline: none;

    color: black;
    margin-top: 20px;

    box-sizing: border-box;
    border: none;
    border: 1px solid #dbdbdb;
    border-radius: 20px;

    background: #ffffff;
    padding: 24px;

    ::placeholder {
      font-weight: 400;

      color: #ababab;
    }
  }

  textarea[id="title"] {
    height: 110px;
    margin-bottom: 40px;
  }

  textarea[id="content"] {
    height: 170px;
    margin-bottom: 40px;
  }

  textarea[id="writer"] {
    height: 80px;
    line-height: 30px;

    display: flex;
  }
`;
