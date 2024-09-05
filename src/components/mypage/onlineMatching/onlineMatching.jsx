import { useEffect, useState } from "react";
import OnlineMatchingUserView from "./onlineMatchingUserView";
import {
  getGuideInfo,
  getGuideMatchingListAPI,
  getUserInfo,
  getUserMatchingListAPI,
} from "../../../api/AuthApi";
import OnlineMatchingGuideView from "./onlineMatchingGuideView";

const loginData = JSON.parse(localStorage.getItem("loginData"));

export default function OnlineMatching() {
  const isGuide = loginData.isGuide == true;
  const userId = loginData.userId;
  const [guideNames, setGuideName] = useState([]);
  const [userNames, setUserName] = useState([]);
  const [onlineMatchList, setOnlineMatchList] = useState([]);

  const fetchMatchList = async () => {
    let response;
    if (isGuide) {
      response = await getGuideMatchingListAPI({
        guideId: userId,
        type: "online",
      });
    } else {
      response = await getUserMatchingListAPI({
        userId: userId,
        type: "online",
      });
    }
    setOnlineMatchList(response);
    return response; // 반환하여 이후에 사용 가능
  };

  const getGuideNickName = async (guideId) => {
    const response = await getGuideInfo(guideId);
    return response.nickname;
  };

  const getUserNickName = async (userId) => {
    const response = await getUserInfo(userId);
    return response.nickname;
  };

  const fetchNicknames = async (matchList) => {
    if (isGuide) {
      try {
        // 가이드일 경우 유저 닉네임을 받아옴
        const nicknames = await Promise.all(
          matchList.map(async (item) => {
            const nickname = await getUserNickName(item.userId);
            return nickname;
          })
        );
        setUserName(nicknames);
      } catch (error) {
        console.log("유저 닉네임 받아오기 실패", error);
      }
    } else {
      try {
        // 일반 유저일 경우 가이드 닉네임을 받아옴
        const nicknames = await Promise.all(
          matchList.map(async (item) => {
            const nickname = await getGuideNickName(item.guideId);
            return nickname;
          })
        );
        setGuideName(nicknames);
      } catch (error) {
        console.log("가이드 닉네임 받아오기 실패", error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const matchList = await fetchMatchList();
      await fetchNicknames(matchList);
    };
    fetchData();
  }, []);

  const propsG = { onlineMatchList, userNames };
  const propsU = { onlineMatchList, guideNames };

  return isGuide ? (
    <OnlineMatchingGuideView {...propsG} />
  ) : (
    <OnlineMatchingUserView {...propsU} />
  );
}
