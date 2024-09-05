import { useEffect, useState } from "react";
import OfflineMatchingGuideView from "./offlineMatchingGuideView";
import {
  getGuideInfo,
  getGuideMatchingListAPI,
  getUserInfo,
  getUserMatchingListAPI,
} from "../../../api/AuthApi";
import OfflineMatchingUserView from "./offlineMatchingUserView";

const loginData = JSON.parse(localStorage.getItem("loginData"));

export default function OfflineMatching() {
  const isGuide = loginData.isGuide == true;
  const userId = loginData.userId;
  const [guideNames, setGuideName] = useState([]);
  const [userNames, setUserName] = useState([]);
  const [offlineMatchList, setOfflineMatchList] = useState([]);

  const fetchMatchList = async () => {
    let response;
    if (isGuide == true) {
      response = await getGuideMatchingListAPI({
        guideId: userId,
        type: "offline",
      });
    } else {
      response = await getUserMatchingListAPI({
        userId: userId,
        type: "offline",
      });
    }
    setOfflineMatchList(response);
    return response;
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

  const propsG = { offlineMatchList, userNames };
  const propsU = { offlineMatchList, guideNames };

  return isGuide == true ? (
    <OfflineMatchingGuideView {...propsG} />
  ) : (
    <OfflineMatchingUserView {...propsU} />
  );
}
