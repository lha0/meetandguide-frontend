import { useNavigate } from "react-router-dom";
import GuideSignUpView from "./GuideSignUpView";
import { useState } from "react";
import { guideSignup } from "../../api/AuthApi";

export default function GuideSignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
    age: 0,
    nickname: "",
    areaCode: 0,
    sigunguCode: 0,
    career: 0,
    phonenum: "",
    comment: "",
    online: 0,
    offline: 0,
  });

  const handleChange = async (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
    console.log(values);
  };

  const handleSignUpBtn = () => {
    guideSignup(values)
      .then((response) => {
        navigate("/logIn");
      })
      .catch((error) => console.log("guide signup fails ", error));
  };
  const props = { values, handleChange, handleSignUpBtn };
  return <GuideSignUpView {...props} />;
}
