export default function StatusBarView({
  matchStatus,
  handleShowCreateMatchModalBtn,
  handleShowModifyMatchModalBtn,
  handleShowReviewModalBtn,
}) {
  if (matchStatus === 0) {
    return (
      <div className="h-[10%] flex justify-between items-center p-5 rounded-2xl shadow-button">
        <p className=" font-bold text-[24px]"> 매칭 전 </p>
        <div className="flex">
          <button
            onClick={handleShowCreateMatchModalBtn}
            className="px-4 py-2 rounded-2xl shadow-button text-white text-[15px] font-bold bg-[#9CB7D6]"
          >
            약속 잡기
          </button>
        </div>
      </div>
    );
  } else if (matchStatus === 1) {
    return (
      <div className="h-[10%] flex justify-between items-center p-5 rounded-2xl shadow-button">
        <p className=" font-bold text-[24px]"> 매칭 중 </p>
        <div className="flex">
          <button
            onClick={handleShowModifyMatchModalBtn}
            className="px-4 py-2 rounded-2xl shadow-button text-white text-[15px] font-bold bg-[#9CB7D6]"
          >
            매칭정보 수정하기
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-[10%] flex justify-between items-center p-5 rounded-2xl shadow-button">
        <p className=" font-bold text-[24px]"> 여행 완료 </p>
        <div className="flex">
          <button
            onClick={handleShowReviewModalBtn}
            className="px-4 py-2 rounded-2xl shadow-button text-white text-[15px] font-bold bg-[#9CB7D6]"
          >
            리뷰 작성
          </button>
        </div>
      </div>
    );
  }
}
