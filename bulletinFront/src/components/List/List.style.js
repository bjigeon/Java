import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 1665px;
  width: 100vw;
`;

export const ContentContainer = styled.div`
  width: 1280px;

  display: flex;
  flex-direction: column;

  margin: 100px auto 0px auto;
`;

export const TextContainer = styled.div`
  margin-bottom: 40px;

  p {
    font-weight: 400;
    font-size: 18px;
    color: #ababab;
  }

  h3 {
    margin: 14px 0px 0px 0px;

    font-weight: bold;
    font-size: 32px;

    color: #1f1f1f;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 60px 40px;
`;

export const Board = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 400px;
  height: 318px;

  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 15px;

  cursor: pointer;
  :hover {
    box-shadow: 0px 4px 30px #5a62b1;
    transition: 1.5s;
  }

  h3,
  p {
    overflow: hidden;
  }

  h3 {
    text-overflow: ellipsis;
    white-space: nowrap;

    width: 344px;
    height: 28px;

    margin: 28px 0px 21px 0px;

    font-size: 24px;
    color: #1f1f1f;
  }

  p {
    width: 344px;
    height: 124px;

    margin: 0px 0px 31px 0px;

    font-weight: 400;
    font-size: 18px;
    color: #7b7b7b;

    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }

  div {
    width: 344px;

    display: flex;
    flex-direction: column;

    img {
      width: 24px;
      height: 24px;

      margin-right: 12px;
    }
  }
`;

export const InfoContainer = styled.div`
  span {
    width: 100%;
    height: 30px;

    display: flex;
    align-items: center;

    p {
      margin: 0;
      height: 30px;

      display: flex;
      align-items: center;
    }

    a {
      display: flex;
      justify-content: flex-end;
      text-overflow: ellipsis;
      white-space: nowrap;

      width: 100%;

      font-weight: 400;
      font-size: 18px;

      color: #ababab;
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
