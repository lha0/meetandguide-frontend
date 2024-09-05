import Profile from "../../assets/image/icon_mypage.png";
export default function GuideCard({ nickname, career, handleClickOnCard }) {
  return (
    <div
      onClick={handleClickOnCard}
      className="w-[100%] min-h-[150px] px-[40px] py-[25px] flex items-center gap-[35px] rounded-2xl shadow-button"
    >
      <img
        className="w-[50px] h-[50px] mb-[15px]"
        src={Profile}
        alt="profile"
      />
      <div className="flex flex-col justify-start gap-[8px]">
        <div className="font-bold text-[20px]"> {nickname}</div>
        <div className="font-bold text-[14px] text-gray"> 경력 {career}년</div>
      </div>
    </div>
  );
}
