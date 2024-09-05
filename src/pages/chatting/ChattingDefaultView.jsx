import { useEffect, useState } from "react";
import { getGuideInfo } from "../../api/AuthApi";
import ChattingView from "./ChattingView";

export default function ChattingDefaultView({
  chatList,
  userId,
  selectedRoomId,
  onSelectRoom,
  curRoom,
  handleCurRoomIdx,
}) {
  const [otherList, setOtherList] = useState([]);
  const [guideId, setGuideId] = useState(null);
  const [normalUserId, setNormalUserId] = useState(null);
  const [matchStatusMap, setMatchStatusMap] = useState({});
  const [matchingIdMap, setMatchingIdMap] = useState({});

  const getNickName = async (userId) => {
    const response = await getGuideInfo(userId);
    return response.nickname;
  };

  useEffect(() => {
    const fetchNicknames = async () => {
      try {
        const nicknames = await Promise.all(
          chatList.map(async (item) => {
            // 로그인한 사용자가 userId인지 guideId인지 확인
            const otherUserId =
              item.userId === userId ? item.guideId : item.userId;
            const otherNickName = await getNickName(otherUserId);
            return otherNickName;
          })
        );
        setOtherList(nicknames);

        // 매칭 상태와 매칭 ID 저장
        const matchStatusObj = {};
        const matchingIdObj = {};
        chatList.forEach((item) => {
          matchStatusObj[item.roomId] = item.status;
          matchingIdObj[item.roomId] = item.matchingId;
        });
        setMatchStatusMap(matchStatusObj);
        setMatchingIdMap(matchingIdObj);
      } catch (error) {
        console.error("Failed to fetch nicknames", error);
      }
    };

    fetchNicknames();
  }, [chatList, userId]);

  // 특정 방 선택 시 guideId와 normalUserId를 업데이트
  const handleRoomSelect = (item, idx) => {
    // 가이드 아이디와 유저 아이디를 설정
    setGuideId(item.guideId);
    setNormalUserId(item.userId);

    // 방 선택
    onSelectRoom(item.roomId);
    handleCurRoomIdx(idx);
  };

  return (
    <section className="w-[80%] mx-[162px] flex items-center] gap-[20px]">
      <aside className="w-[20%] flex flex-col gap-[20px]">
        <h1 className="text-[32px] font-bold ">채팅 목록</h1>
        <ul className="flex flex-col">
          {chatList.map((item, idx) => {
            const isSelected = idx == curRoom;
            return (
              <li
                key={idx}
                onClick={() => handleRoomSelect(item, idx)}
                className={`${
                  isSelected
                    ? "rounded-2xl bg-[#9CB7D6] text-white"
                    : "bg-white"
                } h-[60px] px-3 leading-[60px]`}
              >
                <div> {otherList[idx]} </div>
              </li>
            );
          })}
        </ul>
      </aside>

      {
        //채팅 전체 컨테이너
      }
      <>
        {selectedRoomId ? (
          <ChattingView
            guideId={guideId}
            normalUserId={normalUserId}
            userId={userId}
            roomId={selectedRoomId} // 선택된 roomId를 ChattingView에 전달
            matchStatus={matchStatusMap[selectedRoomId]} //매칭 상태 전달
            matchingId={matchingIdMap[selectedRoomId]}
          />
        ) : (
          <div className="w-[80%] h-[700px] flex flex-col gap-[10px] rounded-2xl shadow-button">
            <p className="h-[700px] leading-[700px] text-center font-bold text-[24px]">
              채팅방을 클릭하면 나타납니다.
            </p>
          </div>
        )}
      </>
    </section>
  );
}
