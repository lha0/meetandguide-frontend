import Banner from "../../assets/image/tempDetailRecommendBanner.png";

export default function AreaDetailView({
  areaName,
  recommendInfo,
  curSigungu,
  handleCurSigungu,
}) {
  return (
    <section className="max-w-full mx-[162px] flex flex-col items-center]">
      <div className="mt-[25px] flex flex-col gap-[20px]">
        <h1 className="font-bold text-[24px]"> 여행지 추천 > {areaName}</h1>
        <img src={Banner} alt="banner" />
      </div>
      <div className="mt-[24px]">
        <div className="flex justify-between">
          <h2 className="font-bold text-[20px]"> 즐길 거리 </h2>
        </div>

        <div className="max-w-full h-[50px] mt-[15px] mb-[15px] flex items-center gap-[24px]">
          {recommendInfo.map((item, idx) => {
            return (
              <button className="" onClick={() => handleCurSigungu(idx)}>
                {" "}
                {item.name}{" "}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-[40px]">
          <div className="flex items-center justify-start gap-[24px]">
            <div className="w-[166px] h-[223px] text-center rounded-2xl shadow-button ">
              {" "}
              먹거리{" "}
            </div>

            {recommendInfo[curSigungu].restaurant.map((item, idx) => {
              return (
                <div className="w-[166px] h-[223px] text-center rounded-2xl shadow-button ">
                  {item.title}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col">
            <div className="flex items-center justify-start gap-[24px]">
              <div className="w-[166px] h-[223px] text-center rounded-2xl shadow-button ">
                {" "}
                여행지{" "}
              </div>
              {recommendInfo[curSigungu].tour.map((item, idx) => {
                return (
                  <div className="w-[166px] h-[223px] text-center rounded-2xl shadow-button ">
                    {item.title}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
