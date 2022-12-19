/*
    유저 정보를 저장하는 Atom입니다
    기본값은 null
    형식
*/
import { atom } from "recoil";
export default atom({
  key: "user",
  default: null,
});
