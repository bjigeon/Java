import Main from "../components/Main/Main";
import Write from "../components/Write/Write";
import Read from "../components/Read/Read";
import LoginANDRegister from "../components/Login&Register/Main";

const routes = [
  { path: "", component: <Main />, header: true },
  { path: "*", component: <h1>404</h1>, header: false },
  { path: "write", component: <Write />, header: true },
  { path: "edit/:id", component: <Write />, header: true },
  { path: "bulletin/:id", component: <Read />, header: true },
  { path: "login", component: <LoginANDRegister />, header: true },
  { path: "register", component: <LoginANDRegister />, header: true },
];

export default routes;
