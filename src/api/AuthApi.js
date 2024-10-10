import axios from "axios";
import { jwtDecode } from "jwt-decode";

const loginData = JSON.parse(localStorage.getItem("loginData"));

let GRANT_TYPE = "";
let ACCESS_TOKEN = "";
// 현재 경로가 로그인 페이지가 아닌 경우에만 리다이렉트 실행
if (loginData && loginData.jwt) {
  GRANT_TYPE = loginData.jwt.grantType;
  ACCESS_TOKEN = loginData.jwt.accessToken;
}

// CREATE CUSTOM AXIOS INSTANCE
export const AuthApi = axios.create({
  baseURL: "http://3.34.40.65:8080",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "true",
  },
});

// 요청 인터셉터
AuthApi.interceptors.request.use(
  (config) => {
    // 로그인이나 회원가입 등의 특정 API는 토큰이 필요하지 않으므로 예외 처리
    const noAuthRequiredEndpoints = ["/api/login/v1", "/api/register"];
    if (!noAuthRequiredEndpoints.includes(config.url)) {
      // 헤더에 엑세스 토큰 담기 (로그인 상태인 경우)
      if (ACCESS_TOKEN) {
        config.headers.Authorization = `${GRANT_TYPE} ${ACCESS_TOKEN}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
AuthApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config, response } = error;
    //  401에러가 아니거나 재요청이거나 refresh 요청인 경우 그냥 에러 발생
    if (response.status !== 401 || config.sent) {
      return Promise.reject(error);
    }
    // 아닌 경우 토큰 갱신
    config.sent = true; // 무한 재요청 방지
    const newAccessToken = await loginSessionAPI();
    if (newAccessToken) {
      const loginData = JSON.parse(localStorage.getItem("loginData"));

      if (loginData) {
        loginData.accessToken = newAccessToken;
        localStorage.setItem("loginData", JSON.stringify(loginData));
        ACCESS_TOKEN = newAccessToken;
        config.headers.Authorization = `${GRANT_TYPE} ${ACCESS_TOKEN}`;
      }
      return axios(config); // 재요청
    }
    logout(); // 갱신 실패 시 로그아웃
    return Promise.reject(error);
  }
);

const logout = () => {
  localStorage.clear();
};

// LOGIN API
export const loginAPI = async ({ username, password }) => {
  const data = { username, password };
  const response = await AuthApi.post("/api/login/v1", data);

  // 로그인 성공 후 토큰 만료 시간 확인
  const decodedToken = jwtDecode(response.data.jwtToken.accessToken);
  const expiresAt = decodedToken.exp * 1000; // exp는 초 단위이므로 1000을 곱해 밀리초로 변환

  // 만료 시간까지 남은 시간 계산
  const currentTime = Date.now();
  const timeUntilExpiration = expiresAt - currentTime;

  // 만료 시간에 맞춰 자동 로그아웃 타이머 설정
  setTimeout(() => {
    logout();
  }, timeUntilExpiration);

  return response.data;
};

// 로그인 세션 유지
export const loginSessionAPI = async () => {
  try {
    const response = await AuthApi.post("/api/currusername");
    const newAccessToken = response.data.accessToken;
    console.log(response);
    return newAccessToken;
  } catch (e) {
    logout();
  }
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
  console.log(data);

  const response = await AuthApi.post("/sms/verify", data);
  return response.data;
};

//이메일 인증번호 발송
export const sendAuthEmail = async (verifyId) => {
  const data = {
    verifyId,
  };
  const response = await AuthApi.post("/mail/send", data);
  return response.data;
};

//이메일 인증번호 체크
export const verifyEmailNum = async ({ verifyId, verificationCode }) => {
  const data = {
    verifyId,
    verificationCode,
  };
  const response = await AuthApi.post("/mail/verify", data);
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
  const params = {
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
  const response = await AuthApi.put("/api/guide", {}, { params });
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
  const params = {
    userId,
    age,
    nickname,
    password,
    phonenum,
    gender,
  };

  const response = await AuthApi.put("/api/user", {}, { params });
  return response.data;
};

// 오프라인 가이드 조회
export const getOfflineGuideList = async ({
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

/**** 매칭 API ****/
// 가이드 아이디로 매칭 리스트 조회
export const getGuideMatchingListAPI = async ({ guideId, type }) => {
  const params = { guideId, type };
  const response = await AuthApi.get("/api/matching/guide", { params });
  return response.data;
};

// 사용자 아이디로 매칭 리스트 조회
export const getUserMatchingListAPI = async ({ userId, type }) => {
  const params = { userId, type };
  const response = await AuthApi.get("/api/matching/user", { params });
  return response.data;
};

// 매칭 수정
export const modifyMatchingAPI = async ({
  matchingId,
  startTime,
  endTime,
  cost,
  people,
}) => {
  const params = {
    matchingId,
    startTime,
    endTime,
    cost,
    people,
  };
  const response = await AuthApi.put("/api/matching", {}, { params });
  return response.data;
};

// 리뷰 작성되지 않은 매칭
export const notReviewedMatchingAPI = async ({ userId, guideId }) => {
  const params = { userId, guideId };
  console.log(params);
  const response = await AuthApi.get("/api/matching/notreviewed", { params });
  return response.data;
};

/***** 리뷰 API *****/
// 리뷰 등록
export const createReviewAPI = async ({
  userId,
  guideId,
  matchingId,
  rating,
  comment,
}) => {
  const params = {
    userId,
    guideId,
    matchingId,
    rating,
    comment,
  };

  const response = await AuthApi.post(`/api/review`, {}, { params });
  return response.data;
};

// 리뷰 수정
export const modifyReviewAPI = async ({ reviewId, rating, comment }) => {
  const params = {
    reviewId,
    rating,
    comment,
  };

  const response = await AuthApi.put(`/api/review`, {}, { params });
  return response.data;
};

// 리뷰 삭제
export const deleteReviewAPI = async ({ reviewId }) => {
  const params = {
    reviewId,
  };

  const response = await AuthApi.delete(`/api/review`, {}, { params });
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

//status before to success
export const before2successAPI = async ({
  roomId,
  startTime,
  endTime,
  cost,
  people,
  type,
}) => {
  const params = { roomId, startTime, endTime, cost, people, type };
  const response = await AuthApi.put(
    "/chat/status/before2success",
    {},
    { params }
  );
  return response.data;
};

//status finish to success
export const finish2successAPI = async ({
  roomId,
  startTime,
  endTime,
  cost,
  people,
  type,
}) => {
  const params = { roomId, startTime, endTime, cost, people, type };
  const response = await AuthApi.put(
    "/chat/status/finish2success",
    {},
    { params }
  );
  return response.data;
};

//status success to finish
export const success2finishAPI = async ({ roomId }) => {
  const params = { roomId };
  const response = await AuthApi.put(
    "/chat/status/success2finish",
    {},
    { params }
  );
  return response.data;
};

// status success to before
export const success2beforeAPI = async ({ roomId }) => {
  const params = { roomId };
  const response = await AuthApi.put(
    "/chat/status/success2before",
    {},
    { params }
  );
  return response.data;
};
