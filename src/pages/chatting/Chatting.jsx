import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserChatRoomsAPI } from "../../api/AuthApi";
import ChattingDefaultView from "./ChattingDefaultView";

const userId = Number(localStorage.getItem("userId"));

export default function Chatting() {
  const [chatList, setChatList] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const location = useLocation();

  const getChatRoomList = () => {
    getUserChatRoomsAPI(userId)
      .then((response) => {
        setChatList(response);
      })
      .catch((error) => console.log("chatList get 실패", error));
  };

  useEffect(() => {
    getChatRoomList();

    const queryParams = new URLSearchParams(location.search);
    const roomId = queryParams.get("roomId");
    if (roomId) {
      setSelectedRoomId(parseInt(roomId)); // URL에서 roomId를 추출하여 selectedRoomId로 설정
    }
  }, [location]);

  return (
    <ChattingDefaultView
      chatList={chatList}
      userId={userId}
      selectedRoomId={selectedRoomId} // selectedRoomId 전달
      onSelectRoom={setSelectedRoomId} // roomId 선택 핸들러 전달
    />
  );
}
