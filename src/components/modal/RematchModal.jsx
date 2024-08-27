import { useState } from "react";
import { finish2successAPI } from "../../api/AuthApi";
import RematchModalView from "./RematchModalView";

export default function RematchModal({
  isVisible,
  onClose,
  roomId,
  guideId,
  normalUserId,
  setMatchStatus,
  setMatchingId,
}) {
  const [statusSend, setStatusSend] = useState({
    roomId: roomId,
    startTime: "",
    endTime: "",
    cost: null,
    people: null,
    type: null,
  });

  // 매칭 등록 버튼 핸들러
  const handleCreateMatchBtn = async () => {
    try {
      const response = await finish2successAPI(statusSend);

      setMatchStatus("SUCCESS");
      setMatchingId(response.matchingId);
      alert(response.message);

      onClose();
    } catch (error) {
      // 에러 처리
      alert("등록에 실패되었습니다. 모든 칸을 입력해주세요.");
      console.error("요청 실패:", error);
      if (error.response) {
        console.error("서버에서 응답한 에러:", error.response);
      } else if (error.request) {
        console.error("요청은 보내졌으나 응답이 없음:", error.request);
      } else {
        console.error("요청 설정 중 에러 발생:", error.message);
      }
    }
  };

  // 매칭 정보 입력 onChange 핸들러
  const handleChangeOnInput = (e) => {
    const { id, type, checked, value } = e.target;

    if (id === "online" || id === "offline") {
      setStatusSend({
        ...statusSend,
        ["type"]: value,
      });
    } else if (id === "startTime" || id === "endTime") {
      setStatusSend({
        ...statusSend,
        [id]: value,
      });
    } else {
      setStatusSend({
        ...statusSend,
        [id]: Number(value),
      });
    }
  };

  const props = {
    isVisible,
    onClose,
    handleCreateMatchBtn,
    handleChangeOnInput,
    statusSend,
  };

  return <RematchModalView {...props} />;
}
