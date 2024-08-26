import { useEffect, useState } from "react";
import { createReviewAPI, notReviewedMatchingAPI } from "../../api/AuthApi";
import WriteReviewModalView from "./WriteReviewModalView";
import ReviewListModalView from "./ReviewListModalView";
import { createActionCreatorInvariantMiddleware } from "@reduxjs/toolkit";

export default function WriteReviewModal({
  isVisible,
  onClose,
  roomId,
  matchingId,
  guideId,
  userId,
  setMatchStatus,
}) {
  const [notReviewedList, setNotReviewedList] = useState([
    {
      userId: userId,
      guideId: guideId,
      startTime: "2024-09-20",
      endTime: "2024-09-20",
      cost: 1000,
      people: 10,
      reviewId: null,
    },
  ]);

  const [review, setReview] = useState({
    userId: userId,
    guideId: guideId,
    matchingId: matchingId,
    rating: 0,
    comment: "",
  });

  const [isWriteReviewVisible, setIsWriteReviewVisible] = useState(false);

  // 리뷰 등록
  const fetchCreateReview = async () => {
    createReviewAPI(review)
      .then((response) => {
        console.log(response);
        alert("리뷰 등록에 성공하였습니다.");
        setIsWriteReviewVisible(false);
      })
      .catch((error) => console.log(error));
  };

  // 리뷰 등록 버튼 핸들러
  const handleCreateReviewBtn = () => {
    fetchCreateReview();
  };

  // 리뷰 작성 onChange
  const handleInputReview = (e) => {
    if (e.target.id == "rating") {
      setReview({ ...review, [e.target.id]: Number(e.target.value) });
    } else {
      setReview({ ...review, [e.target.id]: e.target.value });
    }
  };

  // 작성되지 않은 리뷰 매칭 리스트 조회
  const fetchNotReviewedList = () => {
    notReviewedMatchingAPI({ userId, guideId }).then((response) => {
      // setNotReviewedList(response);
    });
  };

  // 리뷰 작성 버튼 핸들러
  const handleWriteReviewBtn = () => {
    onClose(); // 현재 모달을 닫음
    setIsWriteReviewVisible(true); // 새로운 모달을 열도록 상태를 변경
  };

  useEffect(() => {
    fetchNotReviewedList();
  }, []);

  const props = {
    isVisible, // listIsVisible을 isVisible로 재명명하여 전달
    onClose,
    notReviewedList,
    handleWriteReviewBtn,
  };

  const props2 = {
    isVisible: isWriteReviewVisible,
    onClose: () => setIsWriteReviewVisible(false), // 새 모달의 onClose 처리
    handleCreateReviewBtn,
    handleInputReview,
  };

  return (
    <>
      <ReviewListModalView {...props} />
      {isWriteReviewVisible && <WriteReviewModalView {...props2} />}
    </>
  );
}
