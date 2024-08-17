import { useState } from "react";
import { createMatchingAPI } from "../../api/AuthApi";
import CreateMatchModalView from "./CreateMatchModalView";

export default function CreateMatchModal({
  isVisible,
  onClose,
  guideId,
  normalUserId,
  setMatchStatus,
}) {
  const [matchInfo, setMatchInfo] = useState({
    userId: normalUserId,
    guideId: guideId,
    startTime: "",
    endTime: "",
    cost: null,
    people: null,
    reviewId: null,
    type: null,
  });

  // 매칭 등록 버튼 핸들러
  const handleCreateMatchBtn = async () => {
    const formattedMatchInfo = {
      ...matchInfo,
      startTime: `'${matchInfo.startTime}'`,
      endTime: `'${matchInfo.endTime}'`,
    };

    createMatchingAPI(formattedMatchInfo)
      .then((response) => {
        console.log(response);
        alert("매칭 등록에 성공하였습니다.");
        setMatchStatus(1);
      })
      .catch((error) => {
        console.log("매칭 등록 실패 ", error);
        alert("매칭 등록이 실패하였습니다. 다시 시도해주세요");
      });
  };

  // 매칭 정보 입력 onChange 핸들러
  const handleChangeOnInput = (e) => {
    const { id, type, checked, value } = e.target;

    if (id === "online" || id === "offline") {
      setMatchInfo({
        ...matchInfo,
        ["type"]: value,
      });
    } else if (id === "startTime" || id === "endTime") {
      setMatchInfo({
        ...matchInfo,
        [id]: value,
      });
    } else if (id === "type") {
      setMatchInfo({
        ...matchInfo,
        [id]: String(value),
      });
    } else {
      setMatchInfo({
        ...matchInfo,
        [id]: Number(value),
      });
    }
  };

  const props = {
    isVisible,
    onClose,
    handleCreateMatchBtn,
    handleChangeOnInput,
    matchInfo,
  };

  return <CreateMatchModalView {...props} />;
}
