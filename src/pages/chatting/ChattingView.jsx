import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { getChatDetailAPI } from "../../api/AuthApi";

export default function ChattingView({ userId, roomId }) {
  const [chatHistory, setChatHistory] = useState([]);
  const [messageContent, setMessageContent] = useState("");

  const client = useRef(null);

  const connectHandler = () => {
    const socket = new SockJS("http://localhost:8080/ws-stomp");
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
    }
  };

  const messageInputHandler = (e) => {
    setMessageContent(e.target.value);
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
      <div className="h-[10%] rounded-2xl shadow-button"></div>

      <div className="h-[90%] p-5 flex flex-col gap-[20px] rounded-2xl shadow-button">
        <h1 className="font-bold text-[24px]">채팅</h1>

        <ul className="h-[600px] p-2 flex flex-col overflow-auto gap-[10px]">
          {chatHistory.map((item, idx) => {
            let day = item.time.split("T")[0];
            let time = item.time.split("T")[1].split(":").slice(0, 2).join(":");

            if (Number(item.sender) === userId) {
              return (
                <li
                  key={idx}
                  className="max-w-[380px] p-4 rounded-t-2xl rounded-bl-2xl shadow-button self-end text-right"
                >
                  <div>{item.message}</div>
                  <div>{day}</div>
                  <div>{time}</div>
                </li>
              );
            } else {
              return (
                <li
                  key={idx}
                  className="max-w-[380px] p-4 rounded-t-2xl rounded-br-2xl shadow-button self-start text-left"
                >
                  <div>{item.message}</div>
                  <div>{day}</div>
                  <div>{time}</div>
                </li>
              );
            }
          })}
        </ul>
        <div className="flex justify-around gap-[10px]">
          <input
            type="text"
            onChange={messageInputHandler}
            className="w-[85%] h-[45px] rounded-2xl shadow-button"
          />
          <button
            onClick={sendHandler}
            className="w-[10%] h-[45px] leading-[45px] rounded-2xl shadow-button text-white bg-[#9CB7D6]"
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
}
