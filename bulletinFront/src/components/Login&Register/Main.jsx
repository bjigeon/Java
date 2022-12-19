import React from "react";
import * as M from "./Main.style";
import Style from "../Style/Login&Register";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Login from "./Login/Login";
import Register from "./Register/Register";

const Main = () => {
  const location = useLocation();

  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(location.pathname.split("/")[1]);
    console.log(path);
  }, [location.pathname]);

  return (
    <M.Root>
      <Style />
      {path == "login" ? <Login /> : <Register />}
    </M.Root>
  );
};

export default Main;
