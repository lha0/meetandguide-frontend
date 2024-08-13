import axios from "axios";

const GRANT_TYPE = localStorage.getItem("grantType");
let ACCESS_TOKEN = localStorage.getItem("jwtToken");

// CREATE CUSTOM AXIOS INSTANCE
export const AuthApi = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    Authorization: `${GRANT_TYPE} ${ACCESS_TOKEN}`,
    "Access-Control-Allow-Credentials": "true",
    //"Access-Control-Allow-Origin": `http://localhost:8080`,
  },
});

// LOGIN API
export const login = async ({ username, password }) => {
  const data = { username, password };
  const response = await AuthApi.post("/api/login/v1", data);
  return response.data;
};

// SIGNUP API (USER)
export const userSignup = async ({
  username,
  password,
  age,
  nickname,
  phonenum,
}) => {
  const data = { username, password, age, nickname, phonenum };
  const response = await AuthApi.post("/api/register/user/v1", data);
  return response.data;
};

// SIGNUP API (GUIDE)
export const guideSignup = async ({
  username,
  password,
  age,
  nickname,
  areaCode,
  sigunguCode,
  career,
  phonenum,
  comment,
  online,
  offline,
}) => {
  const data = {
    username,
    password,
    age,
    nickname,
    areaCode,
    sigunguCode,
    career,
    phonenum,
    comment,
    online,
    offline,
  };
  const response = await AuthApi.post("/api/register/guide/v1", data);
  return response.data;
};

// 휴대폰 인증번호 발송
export const sendAuthSMS = async (verifyId) => {
  const data = {
    verifyId,
  };
  const response = await AuthApi.post("/sms/send", data);
  return response.data;
};

// 휴대폰 인증번호 체크
export const verifyPhoneNum = async ({ verifyId, verificationCode }) => {
  const data = {
    verifyId,
    verificationCode,
  };

  const response = await AuthApi.post("/sms/verify", data);
  return response.data;
};

// 가이드 정보 GET API (모달창, 프로필)
export const getGuideInfo = async (guideId) => {
  const params = { guideId };
  const response = await AuthApi.get("/api/guide/detail", { params });
  return response.data;
};

// 가이드 정보 수정
export const modifyGuideInfo = async ({
  guideId,
  age,
  nickname,
  password,
  phonenum,
  areaCode,
  sigunguCode,
  career,
  comment,
  online,
  offline,
  gender,
}) => {
  const data = {
    guideId,
    age,
    nickname,
    password,
    phonenum,
    areaCode,
    sigunguCode,
    career,
    comment,
    online,
    offline,
    gender,
  };
  const response = await AuthApi.put("/api/guide", data);
  return response.data;
};

// 사용자 정보 GET API (프로필)
export const getUserInfo = async (userId) => {
  const params = { userId };
  const response = await AuthApi.get("/api/user/detail", { params });
  return response.data;
};

// 사용자 정보 수정
export const modifyUserInfo = async ({
  userId,
  age,
  nickname,
  password,
  phonenum,
  gender,
}) => {
  const data = {
    userId,
    age,
    nickname,
    password,
    phonenum,
    gender,
  };

  const response = await AuthApi.put("/api/user", data);
  return response.data;
};

// 오프라인 가이드 조회
export const getOfflineGuideList = async ({
  ageGoe,
  ageLoe,
  nickname,
  areaCode,
  sigunguCode,
  careerGo,
  careerLow,
  size,
  page,
  order,
}) => {
  const params = {
    ageGoe,
    ageLoe,
    nickname,
    areaCode,
    sigunguCode,
    careerGo,
    careerLow,
    size,
    page,
    order,
  };
  const response = await AuthApi.get("/api/guide/offlineguidelist", { params });
  return response.data;
};

// 온라인 가이드 조회
export const getOnlineGuideList = async ({
  ageGoe,
  ageLoe,
  nickname,
  areaCode,
  sigunguCode,
  careerGoe,
  careerLoe,
  size,
  page,
  order,
}) => {
  const params = {
    ageGoe,
    ageLoe,
    nickname,
    areaCode,
    sigunguCode,
    careerGoe,
    careerLoe,
    size,
    page,
    order,
  };

  const response = await AuthApi.get("/api/guide/onlineguidelist", { params });
  return response.data;
};

// /recommend 페이지 내 여행지역 추천 API
export const getRecommend = async () => {
  const data = {};
  const response = await AuthApi.get(
    "/api/korservice/area/arearecommendlist/v1",
    data
  );
  return response.data;
};

// /recommend/:areaCode 특정 지역 추천 페이지
export const getDetailRecommend = async ({ areaCode }) => {
  const params = { areaCode };
  const response = await AuthApi.get(
    "/api/korservice/area/sigungurecommendlist/v1",
    {
      params,
    }
  );
  return response.data;
};

// 지역 이름
export const getAreaName = async ({ areaCode, sigunguCode }) => {
  const params = { areaCode, sigunguCode };
  const response = await AuthApi.get("/api/korservice/area/code2name/v1", {
    params,
  });
  return response.data;
};

/**** Chatting API ****/
//createRoom
export const createChatRoomAPI = async ({ userId, guideId }) => {
  const data = { userId, guideId };
  const response = await AuthApi.post("/chat/createroom", data);
  return response.data;
};

// roomID 얻기 / GET /chat/room/by-users?userId=15&guideId=37
export const getChatRoomId = async ({ userId, guideId }) => {
  const params = { userId, guideId };
  const response = await AuthApi.get("/chat/room/by-users", { params });
  return response.data;
};

// roomId 에 속한 유저 리스트 받기 / /chat/room/users?chatroomId={id}
export const getUserListAPI = async (chatroomId) => {
  const params = { chatroomId };
  const response = await AuthApi.get("/chat/room/users", { params });
  return response.data;
};

// roomId 현재 채팅방 내 채팅 내역 받기 GET /chat/room/{roomid}/chats
export const getChatDetailAPI = async (roomId) => {
  const params = { roomId };
  const response = await AuthApi.get(`/chat/room/${roomId}/chats`, { params });
  return response.data;
};

//유저가 속한 채팅룸 목록 반환 (가이드, 일반유저 상관 X) / /chat/room/chatrooms?userId={id}
export const getUserChatRoomsAPI = async (userId) => {
  const params = { userId };
  const response = await AuthApi.get(`/chat/room/chatrooms`, { params });
  return response.data;
};
