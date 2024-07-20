import { useEffect, useState } from "react";
import OnlineGuideView from "./OnlineGuideView";
import { getOnlineGuideList } from "../../api/AuthApi";

export default function OnlineGuide() {
  const [onlineGuideList, setList] = useState([]);

  useEffect(() => {
    getOnlineGuideList()
      .then((response) => {
        setList(response.content);
      })
      .catch((error) => {
        console.log("온라인 가이드 조회 실패", error);
      });
  }, []);

  const props = { onlineGuideList };
  return <OnlineGuideView {...props} />;
}
