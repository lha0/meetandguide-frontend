import Banner from "../../assets/image/tempDetailRecommendBanner.png";

export default function AreaDetailView() {
  return (
    <section className="h-[720px] max-w-full mx-[162px] flex flex-col items-center]">
      <div className="mt-[25px] flex flex-col gap-[20px]">
        <h1 className="font-bold text-[24px]"> 여행지 추천 </h1>
        <img src={Banner} alt="banner" />
      </div>
      <div className="mt-[24px]">
        <div className="flex justify-between">
          <h2 className="font-bold text-[20px]"> 즐길 거리 </h2>
        </div>
        <div className="mt-[25px] flex gap-[24px]"> 리스트 </div>
      </div>
    </section>
  );
}
