import SockJS from "sockjs-client";

const connect = (event) => {
  let socket = new SockJS("/ws-stomp");
};
