import Profile from "../assets/image/icon_mypage.png";
export default function GuideCard({ nickname, career }) {
  return (
    <div className="w-[300px] h-[140px] px-[25px] py-[25px] flex justify-start gap-[15px] items-center rounded-2xl shadow-button">
      <img className="w-[50px] h-[50px]" src={Profile} alt="profile" />
      <div className="flex flex-col gap-[5px]">
        <div className="font-bold text-[18px]"> {nickname}</div>
        <div className="font-bold text-[14px] text-gray"> {career}</div>
      </div>
    </div>
  );
}
