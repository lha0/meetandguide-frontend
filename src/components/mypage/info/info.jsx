import { useEffect, useState } from "react";
import InfoView from "./infoView";
import { getGuideInfo, getUserInfo } from "../../../api/AuthApi";
import PwdConfirm from "./pwdConfirm";

export default function Info() {
  const [modifyBtn, setModifyBtn] = useState(false);
  const isGuide = localStorage.getItem("isGuide");
  const userId = localStorage.getItem("userId");
  const [userInfo, setUserInfo] = useState([]);

  const fetchGuideInfo = () => {
    console.log(userId);
    getGuideInfo(userId)
      .then((response) => {
        setUserInfo(response);
      })
      .catch((error) => console.log("가이드 정보 조회 실패 ", error));
  };

  const fetchUserInfo = () => {
    getUserInfo(userId)
      .then((response) => {
        setUserInfo(response);
      })
      .catch((error) => console.log("유저 정보 조회 실패 ", error));
  };

  useEffect(() => {
    if (isGuide) {
      fetchGuideInfo();
    } else {
      fetchUserInfo();
    }
  }, []);

  const handleModifyBtn = () => {
    setModifyBtn(true);
  };

  const props = { handleModifyBtn, userInfo };
  return modifyBtn === true ? (
    <PwdConfirm {...props} />
  ) : (
    <InfoView {...props} />
  );
}
