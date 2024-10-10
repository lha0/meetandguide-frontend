import { useNavigate } from "react-router-dom";
import UserSignUpView from "./UserSignUpView";
import { useState } from "react";
import {
  sendAuthEmail,
  sendAuthSMS,
  userSignup,
  verifyEmailNum,
  verifyPhoneNum,
} from "../../api/AuthApi";

export default function UserSignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
    age: 0,
    nickname: "",
    gender: 1,
    phonenum: "",
  });

  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [verifyNum, setVerifyNum] = useState("");
  const [isSMSSent, setIsSMSSent] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isSMSVerified, setIsSMSVerified] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [emailError, setEmailError] = useState(""); // 이메일 유효성 에러 상태

  const handleChange = async (e) => {
    const { id, type, value } = e.target;

    if (id === "phonenum") {
      const numbersOnly = e.target.value.replace(/\D/g, "");

      if (numbersOnly.length <= 11) {
        setPhoneNumber(numbersOnly);
        setValues({
          ...values,
          phonenum: String(numbersOnly),
        });
      }
    } else if (id === "email") {
      // 이메일 형식 정규식
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      // 이메일 형식이 유효하지 않다면 에러 메시지 표시
      if (!emailPattern.test(value)) {
        setEmailError("유효하지 않은 이메일 형식입니다."); // 에러 상태 업데이트
      } else {
        setEmailError(""); // 에러가 없으면 상태 초기화
        setEmail(value); // 유효한 이메일일 경우 상태 업데이트
      }
    } else if (id === "verifynum") {
      setVerifyNum(String(value));
    } else if (type === "radio") {
      setValues({
        ...values,
        [id]: parseInt(value),
      });
    } else {
      setValues({ ...values, [e.target.id]: e.target.value });
    }
  };

  const displayFormattedPhoneNumber = (numbers) => {
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(
        7
      )}`;
    }
  };

  const handleSignUpBtn = async (e) => {
    if (!isSMSVerified || values.username == "" || values.password == "") {
      alert("작성되지 않은 필드가 있습니다.");
    } else {
      userSignup(values)
        .then((response) => {
          alert("회원가입 성공 \n 로그인 화면으로 이동합니다.");
          navigate("/logIn");
        })
        .catch((error) => {
          alert("회원가입 실패");
          console.log("user signup fails ", error);
        });
    }
  };

  const handleSendSMS = async (e) => {
    sendAuthSMS(phoneNumber)
      .then((response) => {
        alert("인증번호 발송 성공");
        setIsSMSSent(true);
      })
      .catch((error) => console.log("인증번호 발송 실패", error));
  };

  const handleVerifyNum = async (e) => {
    verifyPhoneNum({
      verifyId: phoneNumber,
      verificationCode: verifyNum,
    })
      .then((response) => {
        alert("인증 성공");
        setIsSMSVerified(true);
      })
      .catch((error) => console.log("인증번호 인증 실패", error));
  };

  const handleSendEmail = async (e) => {
    sendAuthEmail(email)
      .then((response) => {
        alert("인증번호 발송 성공");
        setIsEmailSent(true);
      })
      .catch((error) => console.log("인증번호 발송 실패", error));
  };

  const handleVerifyEmail = async (e) => {
    verifyEmailNum({ verifyId: email, verificationCode: verifyNum })
      .then((response) => {
        alert("인증 성공");
        setIsEmailVerified(true);
      })
      .catch((error) => console.log("인증번호 인증 실패", error));
  };

  const props = {
    values,
    handleChange,
    handleSignUpBtn,
    phoneNumber,
    email,
    verifyNum,
    displayFormattedPhoneNumber,
    handleSendSMS,
    handleVerifyNum,
    isSMSSent,
    isSMSVerified,
    handleSendEmail,
    handleVerifyEmail,
    isEmailSent,
    isEmailVerified,
    emailError,
  };

  return <UserSignUpView {...props} />;
}
