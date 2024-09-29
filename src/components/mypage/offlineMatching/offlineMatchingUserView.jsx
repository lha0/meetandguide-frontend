export default function OfflineMatchingUserView({
  offlineMatchList,
  guideNames,
}) {
  return (
    <>
      <h1 className="w-full h-[65px] font-bold text-[20px] leading-[65px]">
        오프라인 여행 내역
      </h1>

      <header className="w-full h-[65px] flex justify-around items-center rounded-2xl shadow-button font-bold text-[14px]">
        <p>가이드</p>
        <p>여행 시작일</p>
        <p>여행 종료일</p>
        <p>여행자 수</p>
      </header>

      <ul className="w-full">
        {offlineMatchList.map((item, idx) => {
          return (
            <li
              key={idx}
              className="w-full h-[65px] flex justify-around items-center text-[10px] md:text-[14px]"
            >
              <p>{guideNames[idx]}</p>
              <p>{item.startTime}</p>
              <p>{item.endTime}</p>
              <p>{item.people}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
