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
        navigate("/logIn");
      })
      .catch((error) => {
        console.log("user signup fails ", error);
      });
  };
  const props = { values, handleChange, handleSignUpBtn };
  return <UserSignUpView {...props} />;
}
