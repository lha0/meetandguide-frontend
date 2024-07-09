import offlineBannerImg from "../../assets/image/offlineBanner.png";

export default function OfflineGuideView() {
  return (
    <section className="h-[720px] max-w-full mx-[162px] flex flex-col items-center]">
      <div className="mt-[25px] flex flex-col gap-[20px]">
        <h1 className="font-bold text-[24px]"> 오프라인 가이드</h1>
        <img src={offlineBannerImg} alt="banner" />
      </div>
      <div className="mt-[24px]">
        <div className="flex justify-between">
          <h2 className="font-bold text-[20px]"> 가이드 목록 </h2>
          <input
            className="w-[270px] h-[45px] px-4 py-2 rounded-2xl shadow-button"
            placeholder="Search"
          />
        </div>
        <div className="mt-[25px]">가이드 리스트</div>
      </div>
    </section>
  );
}
