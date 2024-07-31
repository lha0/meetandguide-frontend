import { useEffect, useState } from "react";
import OfflineGuideView from "./OfflineGuideView";
import { getOfflineGuideList } from "../../api/AuthApi";
import GuideModal from "../../components/common/GuideModal";

export default function OfflineGuide() {
  const [offlineGuideList, setList] = useState([]);
  const [guideModal, setGuideModal] = useState(false);
  const [clickGuideInfo, setClickGuideInfo] = useState([]);

  const params = {
    ageGoe: 0,
    ageLoe: 0,
    nickname: "",
    areaCode: 0,
    sigunguCode: 0,
    careerGo: 0,
    careerLow: 0,
    size: 0,
    page: 0,
    order: "",
  };

  useEffect(() => {
    getOfflineGuideList({ params })
      .then((response) => {
        setList(response.content);
      })
      .catch((error) => {
        console.log("오프라인 가이드 조회 실패", error);
      });
  }, []);

  const handleClickOnCard = (guideInfo) => {
    setGuideModal(true);
    setClickGuideInfo([
      guideInfo.nickname,
      guideInfo.career,
      guideInfo.comment,
    ]);
  };
  const handleOnClose = () => {
    setGuideModal(false);
  };

  const props = { offlineGuideList, handleClickOnCard };

  return (
    <>
      <OfflineGuideView {...props} />
      <GuideModal
        isVisible={guideModal}
        guideInfo={clickGuideInfo}
        onClose={handleOnClose}
      />
    </>
  );
}
