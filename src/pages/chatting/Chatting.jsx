import { useParams } from "react-router-dom";
import ChattingView from "./ChattingView";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { getUserListAPI } from "../../api/AuthApi";

let stompClient = null;
let username = null;
let roomId = null;
let userList = null;
const sender = localStorage.getItem("userId");

function connect(event) {
  let socket = new SockJS("ws://localhost:8080/ws-stomp");
  stompClient = Stomp.over(socket);

  stompClient.connect({}, onConnected, onError);

  event.preventDefault();
}

function onConnected() {
  stompClient.subscribe(`/sub/chat/room/${roomId}`, onMessageReceived);
}

function getUserList() {
  getUserListAPI(roomId)
    .then((response) => {
      userList = response;
    })
    .catch((error) => console.log("userList get 실패", error));
}

function onError(error) {
  console.log("연결 에러 발생");
}

function sendMessage(event) {
  let messageContent = "인풋에 들어갈 내용";

  if (messageContent && stompClient) {
    const chatMessage = {
      type: "TALK",
      roomId: roomId,
      sender: sender,
      message: messageContent,
    };

    stompClient.send("/pub/chat/sendMessage", {}, JSON.stringify(chatMessage));
  }
  event.preventDefault();
}

function onMessageReceived(payload) {
  let chat = JSON.parse(payload.body);

  //chat type : ENTER
  if (chat.type === "ENTER") {
  }
  //chat type : LEAVE
  else if (chat.type === "LEAVE") {
  }

  //chat type : Talk
  else {
    const text = chat.sender[0];
    console.log(text);
  }
}

export default function Chatting() {
  const params = useParams();
  roomId = parseInt(params.roomId);

  return <ChattingView />;
}
