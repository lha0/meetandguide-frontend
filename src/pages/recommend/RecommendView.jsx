import RecommendCard from "../../components/RecommendCard";

export default function RecommendView({ areaList, loadMore }) {
  return (
    <section className="w-full px-[162px] flex flex-col items-center]">
      <div className="max-w-full mt-[25px] flex flex-col gap-[20px]">
        <h1 className="font-bold text-[24px]"> 여행지 추천 </h1>
        <input
          className="max-w-full px-4 py-2 rounded-2xl shadow-button"
          placeholder="Search"
        />
      </div>
      <div className="mt-[24px] flex flex-col gap-[20px]">
        <h2 className="text-[20px]">인기 여행지</h2>
        <div className="flex flex-wrap justify-around gap-[15px]">
          {areaList.map((item, index) => {
            const props = {
              areaname: item.areaname,
            };
            return <RecommendCard key={index} {...props} />;
          })}

          {areaList.length % 8 === 0 && areaList.length > 0 && (
            <button
              onClick={loadMore}
              className="mt-4 px-4 py-2 bg-white text-black rounded-2xl shadow-button"
            >
              더보기
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
