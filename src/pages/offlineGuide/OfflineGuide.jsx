import { useEffect, useState } from "react";
import OfflineGuideView from "./OfflineGuideView";
import { getOfflineGuideList } from "../../api/AuthApi";

export default function OfflineGuide() {
  const [offlineGuideList, setList] = useState([]);

  useEffect(() => {
    getOfflineGuideList()
      .then((response) => {
        setList(response.content);
      })
      .catch((error) => {
        console.log("오프라인 가이드 조회 실패", error);
      });
  }, []);

  const props = { offlineGuideList };

  return <OfflineGuideView {...props} />;
}
