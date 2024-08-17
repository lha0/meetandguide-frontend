import { useState } from "react";
import StatusBarView from "./StatusBarView";
import CreateMatchModal from "../modal/CreateMatchModal";
import ModifyMatchModal from "../modal/ModifyMatchModal";
import WriteReviewModal from "../modal/WriteReviewModal";

export default function StatusBar({ guideId, normalUserId }) {
  // 0: 매칭 전, 1 : 매칭 중, 2:여행 완료 (리뷰 작성 완료 시)
  const [matchStatus, setMatchStatus] = useState(0);

  //매칭 모달 관련 state
  const [createMatchModal, setCreateMatchModal] = useState(false);
  const [modifyMatchModal, setMatchMatchModal] = useState(false);
  const [writeReviewModal, setWriteReviewModal] = useState(false);

  // 매칭 생성 모달 오픈 버튼 handler
  const handleShowCreateMatchModalBtn = () => {
    setCreateMatchModal(true);
  };

  // 매칭 수정 모달 오픈 버튼 handler
  const handleShowModifyMatchModalBtn = () => {
    setMatchMatchModal(true);
  };

  // 리뷰 작성 모달 오픈 버튼 handler
  const handleShowReviewModalBtn = () => {
    setWriteReviewModal(true);
  };

  // 모달 닫기
  const handleOnClose = () => {
    setCreateMatchModal(false);
    setMatchMatchModal(false);
    setWriteReviewModal(false);
  };

  const props = {
    matchStatus,
    handleShowCreateMatchModalBtn,
    handleShowModifyMatchModalBtn,
    handleShowReviewModalBtn,
  };
  const propsCreateModal = {
    isVisible: createMatchModal,
    onClose: handleOnClose,
    guideId: guideId,
    normalUserId: normalUserId,
    setMatchStatus: setMatchStatus,
  };

  const propsModifyModal = {
    isVisible: modifyMatchModal,
    onClose: handleOnClose,
    guideId: guideId,
    normalUserId: normalUserId,
    setMatchStatus: setMatchStatus,
  };

  const propsReviewModal = {
    isVisible: writeReviewModal,
    onClose: handleOnClose,
    guideId: guideId,
    normalUserId: normalUserId,
    setMatchStatus: setMatchStatus,
  };
  return (
    <>
      <StatusBarView {...props} />
      <CreateMatchModal {...propsCreateModal} />
      <ModifyMatchModal {...propsModifyModal} />
      <WriteReviewModal {...propsReviewModal} />
    </>
  );
}
