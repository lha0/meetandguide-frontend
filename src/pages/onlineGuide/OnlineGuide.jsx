import { useEffect, useState } from "react";
import OnlineGuideView from "./OnlineGuideView";
import { getOnlineGuideList } from "../../api/AuthApi";
import GuideModal from "../../components/common/GuideModal";

export default function OnlineGuide() {
  const [onlineGuideList, setList] = useState([]);
  const [guideModal, setGuideModal] = useState(false);
  const [clickGuideInfo, setClickGuideInfo] = useState([]);

  const params = {
    ageGoe: 10,
    ageLoe: 20,
    nickname: "",
    areaCode: 0,
    sigunguCode: 0,
    careerGo: 0,
    careerLow: 0,
    size: 10,
    page: 1,
    order: "",
  };

  useEffect(() => {
    getOnlineGuideList({ params })
      .then((response) => {
        console.log(params.size);
        console.log(response);
        setList(response.content);
      })
      .catch((error) => {
        console.log("온라인 가이드 조회 실패", error);
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
    setClickGuideInfo([]);
  };

  const props = { onlineGuideList, handleClickOnCard };
  return (
    <>
      <OnlineGuideView {...props} />;
      <GuideModal
        isVisible={guideModal}
        guideInfo={clickGuideInfo}
        onClose={handleOnClose}
      />
    </>
  );
}
