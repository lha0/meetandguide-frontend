import { useNavigate } from "react-router-dom";
import LogInView from "./LogInView";
import ChooseMemberView from "./ChooseMemberView";
import { useState } from "react";
import { login } from "../../api/AuthApi";

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
    login(values)
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("grantType", response.jwtToken.grantType);
        localStorage.setItem("accessToken", response.jwtToken.accessToken);
        localStorage.setItem("refreshToken", response.jwtToken.refreshToken);

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

  const props = { values, handleChange, handleLogInBtn, handleSignUpBtn };

  return modal == true ? <ChooseMemberView /> : <LogInView {...props} />;
}
