import { useNavigate } from "react-router-dom";
import LogInView from "./LogInView";
import ChooseMemberView from "./ChooseMemberView";
import { useState } from "react";
import { loginAPI } from "../../api/AuthApi";
// import { useAuth } from "../../useAuth";

export default function LogIn() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = async (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const handleLogInBtn = async (e) => {
    loginAPI(values)
      .then((response) => {
        const loginData = {
          jwt: response.jwtToken,
          userId: response.userId,
          isGuide: response.isGuide,
        };
        localStorage.clear();
        // JSON 객체로 localStorage에 저장
        localStorage.setItem("loginData", JSON.stringify(loginData));

        navigate("/");

        window.location.reload();
      })
      .catch((error) => {
        console.log("login Error ", error);
        alert("로그인 실패");
      });
  };

  const handleSignUpBtn = () => {
    setModal(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogInBtn();
    }
  };

  const props = {
    values,
    handleChange,
    handleLogInBtn,
    handleSignUpBtn,
    handleKeyDown,
  };

  return modal == true ? <ChooseMemberView /> : <LogInView {...props} />;
}
