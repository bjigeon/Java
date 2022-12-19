import styled from "styled-components";
import Deco from "../../assets/img/Main/Deco.png";
import CircleImg from "../../assets/img/Main/Circle.png";
import Edit from "../../assets/img/Main/Edit.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: auto;

  position: relative;
  overflow: hidden;
`;

export const IntroduceContainer = styled.div`
  width: 100vw;
  height: 780px;
`;

export const TextContainer = styled.div`
  position: absolute;
  left: 320px;
  top: 260px;

  /* z-index: -1; */

  h1 {
    margin: 0;
    font-size: 48px;
  }

  button {
    cursor: pointer;
    :hover {
      background-color: rgb(129, 204, 235);
      transition: 2s;
    }

    width: 240px;
    height: 54px;

    margin-top: 80px;

    background: #5a62b1;
    border-radius: 12px;
    border: none;

    outline: none;
    color: #fff;
    font-size: 18px;
  }
`;

export const Img = styled.div`
  position: absolute;
  width: 594.59px;
  height: 362px;
  left: 1005.72px;
  top: 245px;

  background-image: url(${Deco});

  z-index: 1;
`;

export const CircleImage = styled.div`
  position: absolute;
  width: 507px;
  height: 359.49px;
  left: 72px;
  top: 638px;

  background-image: url(${CircleImg});
  z-index: -1;
`;

//--------------------------------------

export const FunctionContainer = styled.div`
  height: 276px;

  background: #f5f9ff;
  border-radius: 80px 80px 0px 0px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const IntroduceFunction = styled.div`
  height: 140px;
  width: 470px;

  display: flex;
  justify-content: center;
  align-items: center;

  div[id="container"] {
    h3 {
      margin: 0px 0px 12px 0px;
      color: #1f1f1f;
    }

    p {
      font-weight: 400;
      font-size: 18px;

      color: #ababab;
    }

    position: relative;

    button {
      cursor: pointer;
      :hover {
        background-color: rgb(129, 204, 235);
        transition: 2s;
      }

      width: 120px;
      height: 40px;

      position: absolute;
      top: +86px;

      background: #5a62b1;
      border-radius: 10px;
      outline: none;
      border: none;

      font-weight: 400;
      font-size: 16px;
      color: #fff;
    }
  }
`;

export const ImgContainer = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 140px;

  background-color: #e9e9ff;
  margin-right: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 90px;
    height: 90px;
  }
`;
