import Modal from "../modal/Modal";
import profile from "../../assets/image/icon_mypage.png";
import { useNavigate } from "react-router-dom";

export default function GuideModalView({ isVisible, guideInfo, onClose }) {
  const props = { isVisible, onClose };
  const navigate = useNavigate();

  return (
    <Modal {...props}>
      <div className="w-[600px] h-[500px] flex flex-col gap-[30px]">
        <div className="h-[150px] flex items-center justify-start gap-[45px]">
          <img
            className="w-[100px] h-[100px]"
            src={profile}
            alt="profileImage"
          />
          <div className="flex flex-col justify-center items-start gap-[10px]">
            <div className="flex gap-[20px]">
              <div className="text-[20px] font-bold"> 이름 </div>
              <div className="text-[20px]"> {guideInfo.nickname} </div>
            </div>
            <div className="flex gap-[20px]">
              <div className="text-[20px] font-bold"> 경력 </div>
              <div className="text-[20px]"> {guideInfo.career} </div>
            </div>
            <div className="flex gap-[20px]">
              <div className="text-[20px] font-bold"> 매칭수 </div>
              <div className="text-[20px]"> {guideInfo.matchingNum} </div>
            </div>
            <div className="flex gap-[20px]">
              <div className="text-[20px] font-bold"> 평균평점 </div>
              <div className="text-[20px]"> {guideInfo.averageRating} </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-[20px] mr-[15px] gap-[10px]">
          <div className="font-bold text-[20px]"> 어필 </div>
          <textarea
            className="w-full h-[80px] p-4 rounded-xl text-[16px] bg-[#e6e6e6]"
            value={guideInfo.comment}
            disabled
          />
        </div>
        <div className="flex flex-col ml-[20px] mr-[15px] gap-[10px]">
          <div className="font-bold text-[20px]"> BEST REVIEW </div>
          <textarea
            className="w-full h-[80px] p-4 rounded-xl text-[16px] bg-[#e6e6e6]"
            value={guideInfo.comment}
            disabled
          />
        </div>
        <button className="font-bold" onClick={() => navigate("/chatting")}>
          {" "}
          채팅 보내기{" "}
        </button>
      </div>
    </Modal>
  );
}
