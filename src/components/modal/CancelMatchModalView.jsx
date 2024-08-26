import Modal from "./Modal";

export default function CancelMatchModalView({
  isVisible,
  onClose,
  handleCancelBtn,
}) {
  return (
    <Modal {...{ isVisible, onClose }}>
      <div className="w-[600px] h-[300px] flex flex-col items-center justify-center gap-[60px]">
        <h1 className="font-bold text-[24px]">매칭을 정말 취소하시겠습니까?</h1>
        <div className="w-full flex flex-col items-center gap-[20px]">
          <button
            onClick={handleCancelBtn}
            className="w-[60%] px-3 py-2 rounded-2xl shadow-button font-bold text-white bg-[#9CB7D6]"
          >
            네, 취소하겠습니다.
          </button>
          <button
            onClick={onClose}
            className="w-[60%] px-3 py-2 rounded-2xl shadow-button bg-white"
          >
            아니요, 유지하겠습니다.
          </button>
        </div>
      </div>
    </Modal>
  );
}
