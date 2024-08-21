import Modal from "./Modal";

export default function WriteReviewModalView({
  isVisible,
  onClose,
  handleCreateReviewBtn,
  handleInputReview,
}) {
  return (
    <Modal {...{ isVisible, onClose }}>
      {" "}
      <div className="w-[600px] h-[500px] flex flex-col items-center gap-[30px]">
        <h1 className="font-bold text-[24px]">리뷰를 등록해주세요!</h1>
        <form className="w-full flex flex-col items-center mt-[20px] p-4 gap-[30px] overflow-auto">
          <div className="w-[400px] leading-[50px] flex justify-between">
            <label> 평점 점수</label>
            <input
              id="rating"
              type="text"
              onChange={handleInputReview}
              className="w-[60%] px-4 py-2 rounded-2xl shadow-button "
            />
          </div>
          <div className="w-[400px] leading-[50px] flex justify-between">
            <label> 리뷰 </label>
            <textarea
              id="comment"
              type="text"
              onChange={handleInputReview}
              className="w-[60%] min-h-[100px] px-4 py-2 rounded-2xl shadow-button "
            />
          </div>
        </form>
        <button
          onClick={handleCreateReviewBtn}
          className="w-[100px] mt-[20px] px-3 py-2 rounded-2xl shadow-button font-bold text-white bg-[#9CB7D6]"
        >
          리뷰 등록
        </button>
      </div>
    </Modal>
  );
}
