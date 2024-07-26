import RecommendCard from "../../components/common/RecommendCard";

export default function RecommendView({
  areaList,
  handleClickloadMore,
  handleClickCard,
}) {
  return (
    <section className="max-w-full mx-[162px] flex flex-col items-center]">
      <div className="mt-[25px] flex flex-col gap-[20px]">
        <h1 className="font-bold text-[24px]"> 여행지 추천 </h1>
        <input
          className="max-w-full h-[50px] px-4 py-2 rounded-2xl shadow-button"
          placeholder="Search"
        />
      </div>
      <div className="mt-[24px] flex flex-col gap-[25px]">
        <h2 className="text-[20px]">인기 여행지</h2>
        <div className="flex flex-wrap items-center justify-between gap-[20px]">
          {areaList.map((item, index) => {
            const props = {
              areaname: item.areaname,
              handleClickCard: () => handleClickCard(item.areacode),
            };
            return <RecommendCard key={index} {...props} />;
          })}
        </div>
        {areaList.length % 8 === 0 && areaList.length > 0 && (
          <button
            onClick={handleClickloadMore}
            className="self-center mt-4 px-4 py-2 bg-white text-black rounded-2xl shadow-button"
          >
            더보기
          </button>
        )}
      </div>
    </section>
  );
}
