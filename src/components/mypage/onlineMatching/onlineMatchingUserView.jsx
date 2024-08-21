export default function OnlineMatchingUserView({
  onlineMatchList,
  guideNames,
}) {
  console.log(onlineMatchList);
  return (
    <>
      <h1 className="w-full h-[65px] font-bold text-[20px] leading-[65px]">
        온라인 여행 내역
      </h1>

      <header className="w-full h-[65px] flex justify-around items-center rounded-2xl shadow-button font-bold text-[14px]">
        <p>가이드</p>
        <p>여행 시작일</p>
        <p>여행 종료일</p>
        <p>여행자 수</p>
      </header>

      <ul className="w-full">
        {onlineMatchList.map((item, idx) => {
          return (
            <li
              key={idx}
              className="w-full h-[65px] flex justify-around items-center"
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
