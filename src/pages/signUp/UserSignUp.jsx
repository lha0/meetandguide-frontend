import { useNavigate } from "react-router-dom";
import UserSignUpView from "./UserSignUpView";
import { useState } from "react";
import { userSignup } from "../../api/AuthApi";

export default function UserSignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
    age: 0,
    nickname: "",
    phonenum: "",
  });

  const handleChange = async (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const handleSignUpBtn = async (e) => {
    userSignup(values)
      .then((response) => {
        alert("회원가입 성공 \n 로그인 화면으로 이동합니다.");
        navigate("/logIn");
      })
      .catch((error) => {
        alert("회원가입 실패");
        console.log("user signup fails ", error);
      });
  };
  const props = { values, handleChange, handleSignUpBtn };
  return <UserSignUpView {...props} />;
}
