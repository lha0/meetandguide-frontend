import { success2beforeAPI } from "../../api/AuthApi.js";
import CancelMatchModalView from "./CancelMatchModalView";

export default function CancelMatchModal({
  isVisible,
  onClose,
  roomId,
  setMatchStatus,
  matchingId,
}) {
  const handleCancelBtn = async () => {
    try {
      const response = success2beforeAPI({ roomId: roomId });
      setMatchStatus("BEFORE");
      alert("취소되었습니다.");
      onClose();
    } catch (error) {
      alert("오류가 발생했습니다. 잠시 후에 다시 시도해주세요.");
      console.log(error);
    }
  };

  const props = {
    isVisible,
    onClose,
    handleCancelBtn,
  };
  return <CancelMatchModalView {...props} />;
}
