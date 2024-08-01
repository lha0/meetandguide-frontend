import onlineBannerImg from "../../assets/image/onlineBanner.png";
import GuideCard from "../../components/common/GuideCard";

export default function OnlineGuideView({
  onlineGuideList,
  handleClickOnCard,
  GUIDE_FILTER_CATEGORYS,
  params,
  activeFilter,
  handleActiveFilter,
  handleInputTextChange,
}) {
  return (
    <section className="max-w-full mx-[162px] flex flex-col items-center]">
      <div className="mt-[25px] flex flex-col gap-[20px]">
        <h1 className="font-bold text-[24px]"> 온라인 가이드</h1>
        <img src={onlineBannerImg} alt="banner" />
      </div>
      <div className="mt-[24px]">
        <h2 className="font-bold text-[20px]"> 가이드 목록 </h2>
        {/* 필터링 */}
        <div className="mt-[10px] flex justify-between">
          <div className="flex gap-[15px]">
            {GUIDE_FILTER_CATEGORYS.map((item, idx) => {
              if (item.title === "지역" || item.title == "정렬") {
                return (
                  <>
                    <select className="w-[90px] h-[35px] px-4 py-2 rounded-2xl shadow-button">
                      {item.contents.map((elem, idx) => {
                        return <option>{elem}</option>;
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
          </div>
          <input
            className="w-[270px] h-[35px] px-4 py-2 rounded-2xl shadow-button"
            placeholder="Search"
          />
        </div>
        <div className="mt-[25px] flex flex-wrap justify-around gap-[20px]">
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
