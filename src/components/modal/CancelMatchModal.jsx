import { deleteMatchingAPI, success2finishAPI } from "../../api/AuthApi.js";
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
      const [deleteResponse, finishResponse] = await Promise.all([
        deleteMatchingAPI({ matchingId: matchingId }),
        success2finishAPI({ roomId: roomId }),
      ]);

      setMatchStatus("BEFORE");

      console.log(finishResponse);
      alert("삭제 성공");
      onClose();
    } catch (error) {
      alert("삭제 실패");
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
