export default function StatusBarView({
  matchStatus,
  handleShowCreateMatchModalBtn,
  handleShowModifyMatchModalBtn,
  handleShowCancelMatchModalBtn,
  handleShowFinishMatchModalBtn,
  handleOnRematchModalBtn,
}) {
  if (matchStatus === "BEFORE") {
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
  } else if (matchStatus === "SUCCESS") {
    return (
      <div className="h-[10%] flex justify-between items-center p-5 rounded-2xl shadow-button">
        <p className=" font-bold text-[24px]"> 매칭 중 </p>
        <div className="flex gap-[10px]">
          <button
            onClick={handleShowModifyMatchModalBtn}
            className="px-4 py-2 rounded-2xl shadow-button text-white text-[15px] font-bold bg-[#9CB7D6]"
          >
            매칭정보 수정
          </button>
          <button
            onClick={handleShowCancelMatchModalBtn}
            className="px-4 py-2 rounded-2xl shadow-button text-white text-[15px] font-bold bg-[#9CB7D6]"
          >
            매칭 취소
          </button>
          <button
            onClick={handleShowFinishMatchModalBtn}
            className="px-4 py-2 rounded-2xl shadow-button text-white text-[15px] font-bold bg-[#9CB7D6]"
          >
            여행 완료
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-[10%] flex justify-between items-center p-5 rounded-2xl shadow-button">
        <p className=" font-bold text-[24px]"> 여행 완료 </p>
        <div className="flex gap-[10px]">
          <button
            onClick={handleOnRematchModalBtn}
            className="px-4 py-2 rounded-2xl shadow-button text-white text-[15px] font-bold bg-[#9CB7D6]"
          >
            새로운 여행 등록
          </button>
        </div>
      </div>
    );
  }
}
