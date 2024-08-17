import WriteReviewModalView from "./WriteReviewModalView";

export default function WriteReviewModal({
  isVisible,
  onClose,
  guideId,
  normalUserId,
  setMatchStatus,
}) {
  const props = {
    isVisible,
    onClose,
  };

  return <WriteReviewModalView {...props} />;
}
