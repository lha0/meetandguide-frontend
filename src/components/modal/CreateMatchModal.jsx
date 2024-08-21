import { useState } from "react";
import { createMatchingAPI, modifyMatchStatusAPI } from "../../api/AuthApi";
import CreateMatchModalView from "./CreateMatchModalView";

export default function CreateMatchModal({
  isVisible,
  onClose,
  roomId,
  guideId,
  normalUserId,
  setMatchStatus,
  setMatchingId,
}) {
  const [matchInfo, setMatchInfo] = useState({
    userId: normalUserId,
    guideId: guideId,
    startTime: "",
    endTime: "",
    cost: null,
    people: null,
    type: null,
  });
  const [statusSend, setStatusSend] = useState({
    roomId: roomId,
    status: "success",
  });

  // 매칭 등록 버튼 핸들러
  const handleCreateMatchBtn = async () => {
    try {
      const [modifyResponse, createResponse] = await Promise.all([
        modifyMatchStatusAPI(statusSend),
        createMatchingAPI(matchInfo),
      ]);

      setMatchStatus("SUCCESS");
      setMatchingId(createResponse.matchingId);
      alert(createResponse.message);

      onClose();
    } catch (error) {
      // 에러 처리
      alert("등록에 실패되었습니다. 모든 칸을 입력해주세요.");
      console.error("요청 실패:", error);
      if (error.response) {
        console.error(
          "서버에서 응답한 에러:",
          error.response.status,
          error.response.data
        );
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
