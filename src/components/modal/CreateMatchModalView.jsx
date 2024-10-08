import Modal from "./Modal";

export default function CreateMatchModalView({
  isVisible,
  onClose,
  handleCreateMatchBtn,
  handleChangeOnInput,
  statusSend,
}) {
  return (
    <Modal {...{ isVisible, onClose }}>
      <div className="w-[100%] h-[500px] flex flex-col items-center gap-[30px]">
        <h1 className="font-bold text-[18px] m:text-[24px]">
          여행 정보를 등록해주세요!
        </h1>
        <form className="w-full flex flex-col items-center mt-[20px] px-2 py-4 gap-[30px] overflow-auto">
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
          <div className="w-[70%] h-[50px] leading-[50px] flex justify-between text-[14px] m:text-[18px]">
            <label> 온오프라인 </label>
            <div className="w-[60%] flex gap-[20px]">
              <label>
                <input
                  type="checkbox"
                  id="online"
                  value="online"
                  checked={statusSend.type === "online"}
                  onChange={handleChangeOnInput}
                />
                온라인
              </label>
              <label>
                <input
                  type="checkbox"
                  id="offline"
                  value="offline"
                  checked={statusSend.type === "offline"}
                  onChange={handleChangeOnInput}
                />
                오프라인
              </label>
            </div>
          </div>
        </form>
        <button
          onClick={handleCreateMatchBtn}
          className="w-[100px] mt-[20px] px-3 py-2 rounded-2xl shadow-button font-bold text-white bg-[#9CB7D6]"
        >
          등록
        </button>
      </div>
    </Modal>
  );
}
