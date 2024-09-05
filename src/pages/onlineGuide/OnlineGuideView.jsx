import onlineBannerImg from "../../assets/image/onlineBanner.png";
import AreaSelect from "../../components/common/AreaSelect";
import GuideCard from "../../components/common/GuideCard";

export default function OnlineGuideView({
  onlineGuideList,
  handleClickOnAreaSel,
  handleClickOnCard,
  GUIDE_FILTER_CATEGORYS,
  params,
  areaName,
  activeFilter,
  handleActiveFilter,
  handleInputTextChange,
  totalPages, // 전체 페이지 수
  page, // 현재 페이지 번호
  handlePageChange, // 페이지 변경 핸들러
}) {
  return (
    <section className="w-[80%] mx-[162px] flex flex-col items-center]">
      <div className="mt-[25px] flex flex-col gap-[20px]">
        <div className="flex justify-between">
          <h1 className="font-bold text-[24px]"> 온라인 가이드</h1>
          <div className="flex items-center gap-[20px]">
            <h6>현재 지역 : </h6>
            <h6 className="font-bold text-[18px]">📍{areaName}</h6>
            <button
              className="px-4 py-2 rounded-2xl shadow-button font-bold"
              onClick={handleClickOnAreaSel}
            >
              🌍 지역 선택
            </button>
          </div>
        </div>
        <img src={onlineBannerImg} alt="banner" />
      </div>
      <div className="mt-[40px]">
        <div className="flex justify-between">
          <h2 className="font-bold text-[20px]"> 가이드 목록 </h2>
          {/* 필터링 */}
          <div className="mt-[10px] flex gap-[15px]">
            {GUIDE_FILTER_CATEGORYS.map((item, idx) => {
              if (item.title === "지역") {
                return null;
              } else if (item.title === "시군구") {
                return (
                  <AreaSelect
                    key={idx}
                    css={
                      "w-[180px] h-[35px] px-4 py-2 rounded-2xl shadow-button"
                    }
                    id={item.sortType}
                    title={item.title}
                    areaCode={params.areaCode}
                    handleChange={handleInputTextChange}
                  />
                );
              } else if (item.title === "정렬") {
                return (
                  <>
                    <select
                      key={idx}
                      className="w-[110px] h-[35px] px-4 py-2 rounded-2xl shadow-button"
                      id={item.sortType}
                      onChange={handleInputTextChange}
                    >
                      {item.contents.map((elem, idx) => {
                        return (
                          <option key={idx} value={elem.value}>
                            {elem.name}
                          </option>
                        );
                      })}
                    </select>
                  </>
                );
              } else {
                return (
                  <div key={idx} className="relative">
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
              id="nickname"
              value={params.nickname || ""} // 검색어 바인딩
              onChange={handleInputTextChange} // 검색어 변경 처리
            />
          </div>
        </div>
        <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {onlineGuideList.map((item, index) => {
            const props = {
              nickname: item.nickname,
              career: item.career,
              handleClickOnCard: () => handleClickOnCard(item.guideId),
            };
            return <GuideCard key={index} {...props} />;
          })}
        </div>

        {/* 페이지네이션 */}
        <div className="h-[50px] mt-[20px] flex justify-center gap-[10px]">
          <button
            className="px-4 py-2 rounded-xl bg-gray-300"
            disabled={page === 0}
            onClick={() => handlePageChange(page - 1)}
          >
            이전
          </button>
          <span className="h-[50px] leading-[50px]">
            {page + 1} / {totalPages}
          </span>
          <button
            className="px-4 py-2 rounded-xl bg-gray-300"
            disabled={page === totalPages - 1}
            onClick={() => handlePageChange(page + 1)}
          >
            다음
          </button>
        </div>
      </div>
    </section>
  );
}
