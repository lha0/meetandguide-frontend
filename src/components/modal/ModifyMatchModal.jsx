import { useState } from "react";
import ModifyMatchModalView from "./ModifyMatchModalView";
import { modifyMatchingAPI } from "../../api/AuthApi";

export default function ModifyMatchModal({
  isVisible,
  onClose,
  guideId,
  normalUserId,
  setMatchStatus,
}) {
  console.log(isVisible);
  const [matchInfo, setMatchInfo] = useState({
    matchingId: 0,
    startTime: "",
    endTime: "",
    cost: null,
    people: null,
    reviewId: null,
    type: null,
  });

  // 매칭 수정 버튼 핸들러
  const handleModifyMatchBtn = async () => {
    const formattedMatchInfo = {
      ...matchInfo,
      startTime: `'${matchInfo.startTime}'`,
      endTime: `'${matchInfo.endTime}'`,
    };

    modifyMatchingAPI(formattedMatchInfo)
      .then((response) => {
        console.log(response);
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
    handleModifyMatchBtn,
    handleChangeOnInput,
    matchInfo,
  };
  return <ModifyMatchModalView {...props} />;
}
