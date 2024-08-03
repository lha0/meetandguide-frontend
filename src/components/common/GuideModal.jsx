import { useEffect, useState } from "react";
import GuideModalView from "./GuideModalView";
import { getGuideInfo } from "../../api/AuthApi";

export default function GuideModal({ isVisible, guideID, onClose }) {
  const [guideInfo, setGuideInfo] = useState({});
  const [guideId, setGuideId] = useState({ guideID });

  console.log("in model ", guideID);

  useEffect(() => {
    if (guideID !== -1 && isVisible) {
      getGuideInfo(guideID)
        .then((response) => {
          console.log("가이드 정보 받아오기 성공 ", response);
          setGuideInfo(response); // 받아온 데이터 설정
        })
        .catch((error) => {
          console.log("가이드 정보 받아오기 실패 ", error);
        });
    }
  }, [guideID, isVisible]);

  console.log("guideinfo", guideInfo);
  const props = { isVisible, guideInfo, onClose };
  return <GuideModalView {...props} />;
}
