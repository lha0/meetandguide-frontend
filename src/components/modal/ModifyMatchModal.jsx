import { useState } from "react";
import ModifyMatchModalView from "./ModifyMatchModalView";
import { modifyMatchingAPI } from "../../api/AuthApi";

export default function ModifyMatchModal({
  isVisible,
  onClose,
  roomId,
  matchingId,
  guideId,
  normalUserId,
  setMatchStatus,
}) {
  console.log("matchingId ", matchingId);
  const [matchInfo, setMatchInfo] = useState({
    matchingId: matchingId,
    startTime: "",
    endTime: "",
    cost: null,
    people: null,
  });

  // 매칭 수정 버튼 핸들러
  const handleModifyMatchBtn = async () => {
    modifyMatchingAPI(matchInfo)
      .then((response) => {
        alert("매칭 수정에 성공하였습니다.");
        setMatchStatus(1);
      })
      .catch((error) => {
        console.log("매칭 수정 실패 ", error);
        alert("매칭 수정이 실패하였습니다. 다시 시도해주세요");
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
    handleModifyMatchBtn,
    handleChangeOnInput,
    matchInfo,
  };
  return <ModifyMatchModalView {...props} />;
}
