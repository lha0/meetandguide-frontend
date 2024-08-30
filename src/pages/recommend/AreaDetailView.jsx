import Banner from "../../assets/image/tempDetailRecommendBanner.png";

export default function AreaDetailView({
  areaName,
  recommendInfo,
  curSigungu,
  handleCurSigungu,
  bannerImg,
  slogan,
}) {
  return (
    <section className="max-w-full mx-[162px] flex flex-col items-center]">
      <div className="mt-[25px] flex flex-col gap-[20px]">
        <h1 className="font-bold text-[24px]"> 여행지 추천 > {areaName}</h1>
        <img
          src={bannerImg}
          alt="배너 이미지"
          className="h-[250px] object-cover opacity-60"
        />
        <p className="absolute top-[40%] left-[19%] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-bold text-white text-[30px]">
          {" "}
          {slogan}
        </p>
      </div>
      <div className="mt-[24px]">
        <div className="flex justify-between">
          <h2 className="font-bold text-[20px]"> 즐길 거리 </h2>
        </div>

        <div className="max-w-full h-[50px] mt-[15px] mb-[15px] flex items-center gap-[24px]">
          {recommendInfo.map((item, idx) => {
            const isSelected = idx === curSigungu; // 현재 선택된 버튼인지 확인
            return (
              <button
                key={idx}
                className={`${
                  isSelected ? "bg-[#9CB7D6] text-white" : "bg-white"
                } px-4 py-2 rounded-2xl`} // 선택된 경우 배경색과 텍스트 색상 변경
                onClick={() => handleCurSigungu(idx)}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-[40px]">
          <div className="flex items-center justify-start gap-[24px]">
            <div className="w-[166px] h-[223px] leading-[223px] text-center rounded-2xl shadow-button ">
              먹거리
            </div>

            {recommendInfo[curSigungu].restaurant.map((item, idx) => {
              return (
                <div className="w-[166px] h-[223px] flex flex-col gap-[6px] text-center rounded-2xl shadow-button ">
                  {item.firstimage ? (
                    <img
                      key={idx}
                      className="h-[185px] rounded-2xl"
                      src={item.firstimage}
                      alt="대표이미지"
                    />
                  ) : (
                    <img
                      key={idx}
                      className="h-[80%] rounded-2xl"
                      src={item.firstimage2}
                      alt="대표이미지"
                    />
                  )}

                  <p className="h-[35px] leading-[35px] text-center">
                    {" "}
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col">
            <div className="flex items-center justify-start gap-[24px]">
              <div className="w-[166px] h-[223px] leading-[223px] text-center rounded-2xl shadow-button ">
                {" "}
                여행지{" "}
              </div>
              {recommendInfo[curSigungu].tour.map((item, idx) => {
                return (
                  <div className="w-[166px] h-[223px] flex flex-col gap-[6px] text-center rounded-2xl shadow-button ">
                    {item.firstimage ? (
                      <img
                        key={idx}
                        className="h-[185px] rounded-2xl"
                        src={item.firstimage}
                        alt="대표이미지"
                      />
                    ) : (
                      <img
                        key={idx}
                        className="h-[80%] rounded-2xl"
                        src={item.firstimage2}
                        alt="대표이미지"
                      />
                    )}

                    <p className="h-[35px] leading-[35px] text-center">
                      {" "}
                      {item.title}
                    </p>
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
