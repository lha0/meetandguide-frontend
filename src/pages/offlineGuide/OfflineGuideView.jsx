import offlineBannerImg from "../../assets/image/offlineBanner.png";
import AreaSelect from "../../components/common/AreaSelect";
import GuideCard from "../../components/common/GuideCard";

export default function OfflineGuideView({
  offlineGuideList,
  handleClickOnCard,
  GUIDE_FILTER_CATEGORYS,
  activeFilter,
  handleActiveFilter,
  handleInputTextChange,
  applyFilters,
}) {
  return (
    <section className="max-w-full mx-[162px] flex flex-col items-center]">
      <div className="mt-[25px] flex flex-col gap-[20px]">
        <h1 className="font-bold text-[24px]"> 오프라인 가이드</h1>
        <img src={offlineBannerImg} alt="banner" />
      </div>
      <div className="mt-[40px]">
        <div className="flex justify-between">
          <h2 className="font-bold text-[20px]"> 가이드 목록 </h2>
          {/* 필터링 */}
          <div className="mt-[10px] flex gap-[15px]">
            {GUIDE_FILTER_CATEGORYS.map((item, idx) => {
              if (item.title === "지역") {
                return (
                  <AreaSelect
                    css={
                      "w-[90px] h-[35px] px-4 py-2 rounded-2xl shadow-button"
                    }
                    id={item.sortType}
                    title={item.title}
                    handleChange={handleInputTextChange}
                  />
                );
              } else if (item.title === "시군구") {
                return (
                  <AreaSelect
                    css={
                      "w-[90px] h-[35px] px-4 py-2 rounded-2xl shadow-button"
                    }
                    id={item.sortType}
                    title={item.title}
                    handleChange={handleInputTextChange}
                  />
                );
              } else if (item.title === "정렬") {
                return (
                  <>
                    <select
                      className="w-[90px] h-[35px] px-4 py-2 rounded-2xl shadow-button"
                      id={item.sortType}
                      onChange={handleInputTextChange}
                    >
                      {item.contents.map((elem, idx) => {
                        return <option value={elem.value}>{elem.name}</option>;
                      })}
                    </select>
                  </>
                );
              } else {
                return (
                  <div className="relative">
                    <button
                      className="w-[90px] h-[35px] px-4 py-2 rounded-2xl shadow-button"
                      onClick={(e) => handleActiveFilter(idx)}
                    >
                      {item.title}
                    </button>
                    {activeFilter === idx && (
                      <div className="absolute w-[200px] h-[100px] border-[2px] bg-white flex flex-col items-center justify-center gap-[10px]">
                        <input
                          className="w-[150px] h-[20px] p-4 border-[1px] rounded-xl"
                          type="text"
                          id={item.sortType1}
                          placeholder="최솟값"
                          onChange={handleInputTextChange}
                        />
                        <input
                          className="w-[150px] h-[20px] p-4 border-[1px] rounded-xl"
                          type="text"
                          id={item.sortType2}
                          placeholder="최댓값"
                          onChange={handleInputTextChange}
                        />
                      </div>
                    )}
                  </div>
                );
              }
            })}

            <input
              className="w-[270px] h-[35px] px-4 py-2 rounded-2xl shadow-button"
              placeholder="가이드 이름으로 검색"
            />
            <button
              className="w-[100px] h-[35px] px-4 py-2 rounded-2xl shadow-button"
              onClick={applyFilters}
            >
              {" "}
              필터 적용{" "}
            </button>
          </div>
        </div>
        <div className="mt-[40px] flex flex-wrap justify-around gap-[20px]">
          {offlineGuideList.map((item, index) => {
            const props = {
              nickname: item.nickname,
              career: item.career,
              offlineGuideList,
              handleClickOnCard: () => handleClickOnCard(item),
            };
            return <GuideCard key={index} {...props} />;
          })}
        </div>
      </div>
    </section>
  );
}
