import { useEffect, useState } from "react";
import { getGuideInfo } from "../../api/AuthApi";
import ChattingView from "./ChattingView";

export default function ChattingDefaultView({
  chatList,
  userId,
  selectedRoomId,
  onSelectRoom,
}) {
  const [otherList, setOtherList] = useState([]);
  const [guideId, setGuideId] = useState(null);
  const [normalUserId, setNormalUserId] = useState(null);
  const [matchStatusMap, setMatchStatusMap] = useState({});

  const getNickName = async (userId) => {
    const response = await getGuideInfo(userId);
    return response.nickname;
  };

  useEffect(() => {
    const fetchNicknames = async () => {
      try {
        const nicknames = await Promise.all(
          chatList.map(async (item) => {
            // 가이드 , 일반유저 아이디 구분
            setGuideId(item.guideId);
            setNormalUserId(item.userId);

            //매칭 상태 저장
            setMatchStatusMap((prev) => ({
              ...prev,
              [item.roomId]: item.status,
            }));

            // 로그인한 사용자가 userId인지 guideId인지 확인
            const otherUserId =
              item.userId === userId ? item.guideId : item.userId;
            const otherNickName = await getNickName(otherUserId);
            return otherNickName;
          })
        );
        setOtherList(nicknames);
      } catch (error) {
        console.error("Failed to fetch nicknames", error);
      }
    };

    fetchNicknames();
  }, [chatList]);

  return (
    <section className="w-[80%] mx-[162px] flex items-center] gap-[20px]">
      <aside className="w-[20%] flex flex-col gap-[20px]">
        <input
          type="search"
          className="w-[100%] h-[40px] px-4 rounded-2xl shadow-button"
          placeholder="Search"
        />
        <ul className="flex flex-col">
          {chatList.map((item, idx) => {
            return (
              <li
                key={idx}
                onClick={() => onSelectRoom(item.roomId)}
                className="h-[60px] px-3 leading-[60px] border-b "
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
