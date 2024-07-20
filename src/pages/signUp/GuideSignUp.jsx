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
    const { id, type, checked, value } = e.target;

    if (type === "checkbox") {
      setValues({
        ...values,
        [id]: checked ? 1 : 0,
      });
    } else {
      const newValue = e.target.value;

      if (
        e.target.id == "career" ||
        e.target.id == "areaCode" ||
        e.target.id == "sigunguCode"
      ) {
        setValues({
          ...values,
          [e.target.id]: Number(newValue),
        });
      } else {
        setValues({
          ...values,
          [e.target.id]: newValue,
        });
      }
    }
  };

  const handleSignUpBtn = () => {
    guideSignup(values)
      .then((response) => {
        alert("회원가입 성공 \n 로그인 화면으로 이동합니다.");
        navigate("/logIn");
      })
      .catch((error) => {
        alert("회원가입 실패");
        console.log("guide signup fails ", error);
      });
  };
  const props = { values, handleChange, handleSignUpBtn };
  return <GuideSignUpView {...props} />;
}
