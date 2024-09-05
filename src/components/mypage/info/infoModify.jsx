import { useState } from "react";
import UserInfoModifyView from "./userInfoModifyView";
import GuideInfoModifyView from "./guideInfoModifyView";
import { modifyGuideInfo, modifyUserInfo } from "../../../api/AuthApi";
import { useNavigate } from "react-router-dom";

const loginData = JSON.parse(localStorage.getItem("loginData"));

export default function InfoModify({ userInfo, pwd }) {
  const navigate = useNavigate();
  const isGuide = loginData.isGuide;
  const userId = loginData.userId;
  const [guideParams, setGuideParams] = useState({
    guideId: userId,
    age: userInfo.age,
    nickname: userInfo.nickname,
    password: pwd,
    phonenum: userInfo.phonenum,
    areaCode: userInfo.areaCode,
    sigunguCode: userInfo.sigunguCode,
    career: userInfo.career,
    comment: userInfo.comment,
    online: userInfo.online,
    offline: userInfo.offline,
    gender: userInfo.gender,
  });
  const [userParams, setUserParams] = useState({
    userId: userId,
    age: userInfo.age,
    nickname: userInfo.nickname,
    password: pwd,
    phonenum: userInfo.phonenum,
    gender: userInfo.gender,
  });

  const handleChange = async (e) => {
    const { id, type, checked, value } = e.target;

    if (isGuide) {
      if (type === "checkbox") {
        setGuideParams({
          ...guideParams,
          [id]: checked ? 1 : 0,
        });
      } else if (type === "radio") {
        setGuideParams({
          ...guideParams,
          [id]: parseInt(value),
        });
      } else {
        const newValue = e.target.value;

        if (
          e.target.id === "career" ||
          e.target.id === "areaCode" ||
          e.target.id === "sigunguCode" ||
          e.target.id === "age" ||
          e.target.name === "gender"
        ) {
          setGuideParams({
            ...guideParams,
            [e.target.id]: Number(newValue),
          });
        } else {
          setGuideParams({
            ...guideParams,
            [e.target.id]: newValue,
          });
        }
      }
    } else {
      if (type === "radio") {
        setUserParams({
          ...userParams,
          [id]: parseInt(value),
        });
      } else {
        const newValue = e.target.value;

        if (e.target.id !== "nickname") {
          setUserParams({
            ...userParams,
            [e.target.id]: Number(newValue),
          });
        } else {
          setUserParams({
            ...userParams,
            [e.target.id]: newValue,
          });
        }
      }
    }
  };

  const handleConfirmBtn = () => {
    if (isGuide) {
      modifyGuideInfo(guideParams)
        .then((response) => {
          console.log("가이드 정보 수정 성공");
          alert("회원정보를 수정했습니다.");
          navigate("/");
        })
        .catch((error) => console.log("가이드 정보 수정 실패", error));
    } else {
      modifyUserInfo(userParams)
        .then((response) => {
          console.log("유저 정보 수정 성공");
          alert("회원정보를 수정했습니다.");
          navigate("/");
        })
        .catch((error) => console.log("유저 정보 수정 실패", error));
    }
  };

  const userProps = { userInfo, handleChange, handleConfirmBtn };
  const guideProps = { guideParams, userInfo, handleChange, handleConfirmBtn };
  return isGuide ? (
    <GuideInfoModifyView {...guideProps} />
  ) : (
    <UserInfoModifyView {...userProps} />
  );
}
