import Modal from "./Modal";

export default function ReviewListModalView({
  isVisible,
  onClose,
  notReviewedList,
  handleWriteReviewBtn,
}) {
  console.log("here", notReviewedList);
  return (
    <Modal {...{ isVisible, onClose }}>
      <div className="w-[600px] h-[500px] flex flex-col items-center gap-[40px]">
        <h1 className="font-bold text-[24px]">
          리뷰 작성을 원하는 여행을 선택해주세요!
        </h1>
        <div className="w-full flex flex-col gap-[20px]">
          <div className="flex justify-around px-3 py-3 rounded-2xl shadow-button">
            <p>여행 시작일</p>
            <p>여행 종료일</p>
            <p>여행자 수</p>
            <p className="w-[100px]"> </p>
          </div>
          <ul className="flex flex-col gap-[15px]">
            {notReviewedList.map((item, idx) => {
              return (
                <li key={idx} className="flex justify-around items-center">
                  <div>{item.startTime}</div>
                  <div>{item.endTime}</div>
                  <div>{item.people}</div>
                  <button
                    onClick={() => handleWriteReviewBtn(item)}
                    className="w-[100px] p-2 rounded-2xl shadow-button text-white bg-[#9CB7D6]"
                  >
                    리뷰 작성
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Modal>
  );
}
