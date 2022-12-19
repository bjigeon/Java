import styled from "styled-components";

export const Header = styled.div`
  width: 100vw;
  height: 80px;

  background-color: #fff;

  display: flex;

  position: fixed;
  z-index: 99999999999;
`;

export const InfoContainer = styled.div`
  display: flex;

  width: 50%;
  p,
  h3 {
    margin: 0;
  }

  p {
    /* width: 105px; */
    /* width: auto; */
    height: 100%;

    color: rgb(31, 31, 31, 1);

    display: flex;
    align-items: center;

    margin-left: 30%;

    font-size: 28px;

    h3 {
      color: rgb(90, 98, 177, 1);
      margin-bottom: 7px;
    }
  }

  a {
    height: 100%;

    display: flex;
    align-items: center;

    color: rgb(31, 31, 31, 1);
    font-size: 18px;

    text-decoration: none;

    cursor: pointer;

    :hover {
      color: #5a62b1;
      transition: 0.5s;
      font-weight: bolder;
    }
  }

  a[id="home"] {
    margin-left: 80px;
  }

  a[id="write"] {
    margin-left: 70px;
  }
`;

export const User = styled.div`
  width: 40%;
  margin-right: 10%;
  display: flex;
  justify-content: end;
  align-items: center;

  /* min-width: 740px; */

  font-size: 18px;
  font-weight: bolder;

  p {
    width: auto;
    margin: 0;

    font-weight: 400;
    font-size: 18px;
  }
`;

export const Logout = styled.button`
  width: 120px;
  height: 46px;

  margin-left: 40px;

  color: white;
  background-color: #5a62b1;

  outline: none;
  border: none;
  border-radius: 10px;

  cursor: pointer;

  :hover {
    background-color: rgb(129, 204, 235);
    transition: 2s;
  }
`;
