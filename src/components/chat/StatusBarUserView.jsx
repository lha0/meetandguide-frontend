export default function StatusBarUserView({
  matchStatus,
  handleOnReviewListOpen,
}) {
  if (matchStatus === "BEFORE") {
    return (
      <div className="h-[10%] flex justify-between items-center p-5 rounded-2xl shadow-button">
        <p className=" font-bold text-[24px]"> 매칭 전 </p>
      </div>
    );
  } else if (matchStatus === "SUCCESS") {
    return (
      <div className="h-[10%] flex justify-between items-center p-5 rounded-2xl shadow-button">
        <p className=" font-bold text-[24px]"> 매칭 중 </p>
      </div>
    );
  } else {
    return (
      <div className="h-[10%] flex justify-between items-center p-5 rounded-2xl shadow-button">
        <p className=" font-bold text-[24px]"> 여행 완료 </p>
        <div className="flex">
          <button
            onClick={handleOnReviewListOpen}
            className="px-4 py-2 rounded-2xl shadow-button text-white text-[15px] font-bold bg-[#9CB7D6]"
          >
            리뷰 작성
          </button>
        </div>
      </div>
    );
  }
}
