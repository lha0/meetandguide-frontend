import Modal from "./Modal";

export default function ModifyMatchModalView({
  isVisible,
  onClose,
  handleModifyMatchBtn,
  handleChangeOnInput,
  matchInfo,
}) {
  return (
    <Modal {...{ isVisible, onClose }}>
      <div className="w-[100%] h-[500px] flex flex-col items-center gap-[30px]">
        <h1 className="font-bold text-[18px] m:text-[24px]">
          여행 정보를 수정해주세요!
        </h1>
        <form className="w-full flex flex-col items-center mt-[20px] p-4 gap-[30px] overflow-auto">
          <div className="w-[70%] h-[50px] leading-[50px] flex justify-between">
            <label> 여행 시작일 </label>
            <input
              id="startTime"
              type="date"
              onChange={handleChangeOnInput}
              className="w-[60%] px-4 py-2 rounded-2xl shadow-button text-[12px] m:text-[18px]"
            />
          </div>
          <div className="w-[70%] h-[50px] leading-[50px] flex justify-between">
            <label> 여행 종료일 </label>
            <input
              id="endTime"
              type="date"
              onChange={handleChangeOnInput}
              className="w-[60%] px-4 py-2 rounded-2xl shadow-button text-[12px] m:text-[18px]"
            />
          </div>
          <div className="w-[70%] h-[50px] leading-[50px] flex justify-between">
            <label> 매칭 비용 (원) </label>
            <input
              id="cost"
              type="number"
              placeholder="10000"
              onChange={handleChangeOnInput}
              className="px-4 py-2 rounded-2xl shadow-button text-[12px] m:text-[18px]"
            />
          </div>
          <div className="w-[70%] h-[50px] leading-[50px] flex justify-between">
            <label> 여행자 수 (명) </label>
            <input
              id="people"
              type="number"
              placeholder="5"
              onChange={handleChangeOnInput}
              className="px-4 py-2 rounded-2xl shadow-button text-[12px] m:text-[18px]"
            />
          </div>
        </form>
        <button
          onClick={handleModifyMatchBtn}
          className="w-[100px] mt-[20px] px-3 py-2 rounded-2xl shadow-button font-bold text-white bg-[#9CB7D6]"
        >
          수정
        </button>
      </div>
    </Modal>
  );
}
