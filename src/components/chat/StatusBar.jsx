import { useEffect, useState } from "react";
import StatusBarView from "./StatusBarView";
import CreateMatchModal from "../modal/CreateMatchModal";
import ModifyMatchModal from "../modal/ModifyMatchModal";
import WriteReviewModal from "../modal/WriteReviewModal";
import CancelMatchModal from "../modal/CancelMatchModal";
import FinishMatchModal from "../modal/FinishMatchModal";
import StatusBarUserView from "./StatusBarUserView";

const isGuide = JSON.parse(localStorage.getItem("isGuide"));

export default function StatusBar({
  roomId,
  guideId,
  normalUserId,
  matchStatus: initialMatchStatus,
}) {
  // before: 매칭 전, success : 매칭 중, finish:여행 완료 (리뷰 작성 완료 시)
  const [matchStatus, updateMatchStatus] = useState(initialMatchStatus);

  //매칭 모달 관련 state
  const [createMatchModal, setCreateMatchModal] = useState(false);
  const [modifyMatchModal, setMatchMatchModal] = useState(false);
  const [cancelMatchModal, setCancelMatchModal] = useState(false);
  const [finishMatchModal, setFinishMatchModal] = useState(false);
  const [writeReviewModal, setWriteReviewModal] = useState(false);
  const [reviewListModal, setReviewListModal] = useState(false);

  //매칭 Id 저장
  const [matchingId, setMatchingId] = useState(null);

  // 매칭 생성 모달 오픈 버튼 handler
  const handleShowCreateMatchModalBtn = () => {
    setCreateMatchModal(true);
  };

  // 매칭 수정 모달 오픈 버튼 handler
  const handleShowModifyMatchModalBtn = () => {
    setMatchMatchModal(true);
  };

  // 매칭 취소 모달 오픈 버튼 handler
  const handleShowCancelMatchModalBtn = () => {
    setCancelMatchModal(true);
  };

  // 매칭 종료 (여행 완료) 모달 오픈 버튼 handler
  const handleShowFinishMatchModalBtn = () => {
    setFinishMatchModal(true);
  };

  // 리뷰 작성 모달 오픈 버튼 handler
  const handleShowReviewModalBtn = () => {
    setWriteReviewModal(true);
  };

  // 모달 닫기
  const handleOnClose = () => {
    setCreateMatchModal(false);
    setMatchMatchModal(false);
    setCancelMatchModal(false);
    setFinishMatchModal(false);
    setWriteReviewModal(false);
  };

  // 리뷰 리스트 모달 열기
  const handleOnReviewListOpen = () => {
    setReviewListModal(true);
  };

  // 리뷰 리스트 모달만 닫기
  const handleOnReviewListClose = () => {
    setReviewListModal(false);
  };

  useEffect(() => {
    updateMatchStatus(initialMatchStatus); // 초기 매칭 상태 설정
  }, [initialMatchStatus]);

  const props = {
    matchStatus,
    handleShowCreateMatchModalBtn,
    handleShowModifyMatchModalBtn,
    handleShowCancelMatchModalBtn,
    handleShowFinishMatchModalBtn,
    handleShowReviewModalBtn,
  };

  const propsUser = {
    matchStatus,
    handleOnReviewListOpen,
  };

  const propsCreateModal = {
    isVisible: createMatchModal,
    onClose: handleOnClose,
    roomId: roomId,
    guideId: guideId,
    normalUserId: normalUserId,
    setMatchStatus: updateMatchStatus,
    setMatchingId: setMatchingId,
  };

  const propsModifyModal = {
    isVisible: modifyMatchModal,
    onClose: handleOnClose,
    roomId: roomId,
    matchingId: matchingId,
    guideId: guideId,
    normalUserId: normalUserId,
    setMatchStatus: updateMatchStatus,
  };

  const propsCancelModal = {
    isVisible: cancelMatchModal,
    onClose: handleOnClose,
  };

  const propsFinishModal = {
    isVisible: finishMatchModal,
    onClose: handleOnClose,
    roomId: roomId,
    setMatchStatus: updateMatchStatus,
  };

  const propsReviewModal = {
    isVisible: reviewListModal,
    onClose: handleOnReviewListClose,
    roomId: roomId,
    matchingId: matchingId,
    guideId: guideId,
    userId: normalUserId,
    setMatchStatus: updateMatchStatus,
  };

  return (
    <>
      {isGuide === true ? (
        <StatusBarView {...props} />
      ) : (
        <StatusBarUserView {...propsUser} />
      )}

      <CreateMatchModal {...propsCreateModal} />
      <ModifyMatchModal {...propsModifyModal} />
      <CancelMatchModal {...propsCancelModal} />
      <FinishMatchModal {...propsFinishModal} />
      <WriteReviewModal {...propsReviewModal} />
    </>
  );
}
