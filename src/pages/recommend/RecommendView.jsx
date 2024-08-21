import RecommendCard from "../../components/common/RecommendCard";

export default function RecommendView({
  handleClickloadMore,
  handleClickCard,
  searchQuery,
  onePage,
  handleInputChange,
}) {
  return (
    <section className="w-[80%] mx-[162px] flex flex-col items-center]">
      <div className="mt-[25px] flex flex-col gap-[20px]">
        <h1 className="font-bold text-[24px]"> 여행지 추천 </h1>
        <input
          className="w-full h-[50px] px-4 py-2 rounded-2xl shadow-button"
          placeholder="지역 이름으로 검색"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>
      <div className="mt-[24px] flex flex-col gap-[25px]">
        <h2 className="text-[20px]">인기 여행지</h2>
        <div className="flex flex-wrap items-center justify-between gap-[20px]">
          {onePage.length > 0 ? (
            onePage.map((item, index) => {
              const props = {
                areaname: item.areaname,
                imgUrl: item.imageUrl,
                handleClickCard: () => handleClickCard(item.areacode),
              };
              return <RecommendCard key={index} {...props} />;
            })
          ) : (
            <p className="text-center w-full">해당 지역이 없습니다.</p>
          )}
        </div>
        {onePage.length % 8 === 0 && onePage.length > 0 && (
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
