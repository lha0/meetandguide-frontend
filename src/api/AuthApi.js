import axios from "axios";

const GRANT_TYPE = localStorage.getItem("grantType");
let ACCESS_TOKEN = localStorage.getItem("jwtToken");

// CREATE CUSTOM AXIOS INSTANCE
export const AuthApi = axios.create({
  //baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    Authorization: `${GRANT_TYPE} ${ACCESS_TOKEN}`,

    "Access-Control-Allow-Origin": `http://localhost:8080`,
    "Access-Control-Allow-Credentials": "true",
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
export const sendAuthSMS = async (phonenumber) => {
  const data = {
    phonenumber,
  };
  console.log(data);
  const response = await AuthApi.post("/sms/send", data);
  return response.data;
};

// 휴대폰 인증번호 체크
export const verifyPhoneNum = async ({ phonenumber, verificationCode }) => {
  const data = {
    phonenumber,
    verificationCode,
  };

  console.log(data);
  const response = await AuthApi.post("/sms/verify", data);
  return response.data;
};

// 오프라인 가이드 조회
export const getOfflineGuideList = async () => {
  const data = {};
  const response = await AuthApi.get("/api/guide/offlineguidelist", data);
  return response.data;
};

// 온라인 가이드 조회
export const getOnlineGuideList = async () => {
  const data = {};
  const response = await AuthApi.get("/api/guide/onlineguidelist", data);
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
  const params = { areaCode: areaCode };
  const response = await AuthApi.get("/api/korservice/area/recommendlist/v1", {
    params,
  });
  return response.data;
};
