import axios from "axios";

const GRANT_TYPE = localStorage.getItem("grantType");
let ACCESS_TOKEN = localStorage.getItem("jwtToken");

// CREATE CUSTOM AXIOS INSTANCE
export const AuthApi = axios.create({
  //baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    Authorization: `${GRANT_TYPE} ${ACCESS_TOKEN}`,

    "Access-Control-Allow-Origin": `http://localhost:3000`,
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
