import onlineBannerImg from "../../assets/image/onlineBanner.png";
import GuideCard from "../../components/common/GuideCard";

export default function OnlineGuideView({
  onlineGuideList,
  handleClickOnCard,
}) {
  return (
    <section className="h-[720px] max-w-full mx-[162px] flex flex-col items-center]">
      <div className="mt-[25px] flex flex-col gap-[20px]">
        <h1 className="font-bold text-[24px]"> 온라인 가이드</h1>
        <img src={onlineBannerImg} alt="banner" />
      </div>
      <div className="mt-[24px]">
        <div className="flex justify-between">
          <h2 className="font-bold text-[20px]"> 가이드 목록 </h2>
          <input
            className="w-[270px] h-[45px] px-4 py-2 rounded-2xl shadow-button"
            placeholder="Search"
          />
        </div>
        <div className="mt-[25px] flex gap-[24px]">
          {onlineGuideList.map((item, index) => {
            const props = {
              nickname: item.nickname,
              career: item.career,
              comment: item.comment,
              handleClickOnCard: () => handleClickOnCard(item),
            };
            return <GuideCard key={index} {...props} />;
          })}
        </div>
      </div>
    </section>
  );
}
