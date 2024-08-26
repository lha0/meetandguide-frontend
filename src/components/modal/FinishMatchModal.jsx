import { useState } from "react";
import FinishMatchModalView from "./FinishMatchModalView";
import { success2finishAPI } from "../../api/AuthApi";

export default function FinishMatchModal({
  isVisible,
  onClose,
  roomId,
  setMatchStatus,
}) {
  const [statusSend, setStatusSend] = useState({
    roomId: roomId,
  });

  // 여행 종료 버튼 핸들러
  const handleFinishMatchBtn = async () => {
    try {
      success2finishAPI(statusSend);
      setMatchStatus("FINISH");
      onClose();
    } catch (error) {
      alert("요청 처리에 실패하였습니다. 잠시 후 다시 시도해주세요.");
      console.log("상태 변경 실패");
    }
  };

  const props = {
    isVisible,
    onClose,
    handleFinishMatchBtn,
  };
  return <FinishMatchModalView {...props} />;
}
