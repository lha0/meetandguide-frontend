import { useEffect, useState } from "react";
import { createReviewAPI, notReviewedMatchingAPI } from "../../api/AuthApi";
import WriteReviewModalView from "./WriteReviewModalView";
import ReviewListModalView from "./ReviewListModalView";

export default function WriteReviewModal({
  isVisible,
  onClose,
  roomId,
  guideId,
  userId,
  setMatchStatus,
}) {
  const [notReviewedList, setNotReviewedList] = useState([
    {
      userId: userId,
      guideId: guideId,
      startTime: "",
      endTime: "",
      cost: 0,
      people: 0,
      reviewId: null,
    },
  ]);

  const [review, setReview] = useState({
    userId: userId,
    guideId: guideId,
    matchingId: null,
    rating: 0,
    comment: "",
  });

  const [isWriteReviewVisible, setIsWriteReviewVisible] = useState(false);

  // 리뷰 등록
  const fetchCreateReview = async () => {
    createReviewAPI(review)
      .then((response) => {
        alert("리뷰 등록에 성공하였습니다.");
        setIsWriteReviewVisible(false);
        onClose();
      })
      .catch((error) => {
        console.log(error);
        alert("리뷰 등록에 실패했습니다. 잠시 후 다시 시도해주세요.");
      });
  };

  // 리뷰 등록 버튼 핸들러
  const handleCreateReviewBtn = () => {
    fetchCreateReview();
  };

  // 리뷰 작성 onChange
  const handleInputReview = (e) => {
    if (e.target.id === "rating") {
      if (e.target.value >= 0) {
        if (e.target.value > 5) {
          alert("1부터 5 사이의 숫자를 입력해주세요.");
          e.target.value = null;
        } else {
          setReview({ ...review, [e.target.id]: Number(e.target.value) });
        }
      } else {
        alert("1부터 5 사이의 숫자를 입력해주세요.");
        e.target.value = null;
      }
    } else {
      setReview({ ...review, [e.target.id]: e.target.value });
    }
  };

  // 작성되지 않은 리뷰 매칭 리스트 조회
  const fetchNotReviewedList = () => {
    console.log("here", userId, guideId);
    if (userId && guideId) {
      // userId와 guideId가 유효한지 확인
      notReviewedMatchingAPI({ userId, guideId }).then((response) => {
        setNotReviewedList(response);
      });
    }
  };

  // 리뷰 작성 버튼 핸들러 (리스트 중 선택된 item의 id를 저장)
  const handleWriteReviewBtn = (item) => {
    setReview({ ...review, matchingId: item.id }); // 선택된 item's id를 matchingId로 저장
    setIsWriteReviewVisible(true); // 리뷰 작성 모달 열기
  };

  useEffect(() => {
    if (isVisible) fetchNotReviewedList();
  }, [isVisible]);

  const props = {
    isVisible,
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
