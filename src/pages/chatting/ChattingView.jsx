import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { getChatDetailAPI } from "../../api/AuthApi";
import StatusBar from "../../components/chat/StatusBar";

export default function ChattingView({
  guideId, // 채팅 상태바에 전달하기 위함, 가이드
  normalUserId, // 채팅 상태바에 전달하기 위함, 유저
  userId,
  roomId,
  matchStatus,
  matchingId,
}) {
  const [chatHistory, setChatHistory] = useState([]);
  const [messageContent, setMessageContent] = useState("");

  // 채팅 소켓 관련
  const client = useRef(null);

  const connectHandler = () => {
    const socket = new SockJS("http://3.34.40.65:8080/ws-stomp");
    client.current = Stomp.over(socket);

    client.current.connect(
      {
        "Content-Type": "application/json",
      },
      () => {
        client.current.subscribe(`/sub/chat/room/${roomId}`, (message) => {
          setChatHistory((prev) => [...prev, JSON.parse(message.body)]);
        });
      },
      () => {
        console.log("연결 에러 발생");
      }
    );
  };

  const sendHandler = () => {
    if (client.current && client.current.connected) {
      const chatMessage = {
        type: "TALK",
        roomId: roomId,
        sender: userId,
        message: messageContent,
      };

      client.current.send(
        "/pub/chat/sendMessage",
        {},
        JSON.stringify(chatMessage)
      );

      // 메시지를 전송한 후, 입력 필드를 비웁니다.
      setMessageContent("");
    }
  };

  const messageInputHandler = (e) => {
    setMessageContent(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendHandler();
    }
  };

  const checkChatDetails = async (roomId) => {
    const response = await getChatDetailAPI(roomId);
    setChatHistory(response);
  };

  useEffect(() => {
    if (roomId) {
      connectHandler();
      checkChatDetails(roomId);
    }

    return () => {
      if (client.current) {
        client.current.disconnect();
      }
    };
  }, [roomId]);

  return (
    <div className="w-[85%] h-[700px] flex flex-col gap-[10px]">
      <StatusBar
        roomId={roomId}
        guideId={guideId}
        normalUserId={normalUserId}
        matchStatus={matchStatus}
        matchingId={matchingId}
      />

      <div className="h-[90%] p-5 flex flex-col gap-[20px] rounded-2xl shadow-button">
        <h1 className="font-bold text-[18px] md:text-[24px]">채팅</h1>

        <ul className="h-[600px] p-2 flex flex-col overflow-auto gap-[10px]">
          {chatHistory.map((item, idx) => {
            let day = item.time.split("T")[0];
            let time = item.time.split("T")[1].split(":").slice(0, 2).join(":");

            if (Number(item.sender) === userId) {
              return (
                <li
                  key={idx}
                  className="max-w-[380px] p-4 rounded-t-2xl rounded-bl-2xl shadow-button self-end text-right text-white bg-[#9CB7D6]"
                >
                  <div className="text-[14px] md:text-[18px]">
                    {item.message}
                  </div>
                  <div className="flex gap-[5px]">
                    <div className="text-[9px] md:text-[12px]">{day}</div>
                    <div className="text-[9px] md:text-[12px]">{time}</div>
                  </div>
                </li>
              );
            } else {
              return (
                <li
                  key={idx}
                  className="max-w-[380px] p-4 rounded-t-2xl rounded-br-2xl shadow-button self-start text-left"
                >
                  <div className="text-[14px] md:text-[18px]">
                    {item.message}
                  </div>
                  <div className="flex gap-[5px]">
                    <div className="text-[9px] md:text-[12px]">{day}</div>
                    <div className="text-[9px] md:text-[12px]">{time}</div>
                  </div>
                </li>
              );
            }
          })}
        </ul>
        <div className="flex justify-around gap-[10px]">
          <input
            type="text"
            value={messageContent}
            onChange={messageInputHandler}
            onKeyDown={handleKeyDown}
            className="w-[75%] h-[45px] rounded-2xl shadow-button"
          />
          <button
            onClick={sendHandler}
            className="w-[20%] h-[45px] leading-[45px] rounded-2xl shadow-button text-white text-[9px] md:text-[12px] bg-[#9CB7D6]"
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
}
