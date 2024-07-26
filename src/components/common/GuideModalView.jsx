import Modal from "../modal/Modal";
import profile from "../../assets/image/icon_mypage.png";

export default function GuideModalView({ isVisible, guideInfo, onClose }) {
  const props = { isVisible, onClose };

  return (
    <Modal {...props}>
      <div className="w-[630px] h-[530px] flex flex-col gap-[30px]">
        <div className="h-[150px] flex items-center justify-start gap-[45px]">
          <img
            className="flex-none w-[100px] h-[100px]"
            src={profile}
            alt="profileImage"
          />
          <div className="flex flex-1 flex-col justify-center items-start gap-[10px]">
            <div className="text-[20px]"> 이름 : {guideInfo[0]} </div>
            <div className="text-[20px]"> 경력 : {guideInfo[1]}</div>
          </div>
        </div>
        <div className="ml-[20px] font-bold text-[20px]">
          <div> 어필 </div>
          <div> {guideInfo[2]}</div>
        </div>
      </div>
    </Modal>
  );
}
