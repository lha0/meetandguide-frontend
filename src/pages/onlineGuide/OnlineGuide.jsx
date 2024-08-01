import { useEffect, useState } from "react";
import OnlineGuideView from "./OnlineGuideView";
import { getOnlineGuideList } from "../../api/AuthApi";
import GuideModal from "../../components/common/GuideModal";
import { GUIDE_FILTER_CATEGORYS } from "../../data/Filter";

export default function OnlineGuide() {
  const [onlineGuideList, setList] = useState([]);
  const [guideModal, setGuideModal] = useState(false);
  const [clickGuideInfo, setClickGuideInfo] = useState([]);
  const [activeFilter, setActiveFilter] = useState(0);
  const [params, setParams] = useState({
    ageGoe: 0,
    ageLoe: 0,
    nickname: "",
    areaCode: 0,
    sigunguCode: 0,
    careerGoe: 0,
    careerLoe: 0,
    size: 0,
    page: 1,
    order: "",
  });

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

  const handleActiveFilter = (idx) => {
    setActiveFilter(idx);
  };

  const handleInputTextChange = (e) => {
    const { id, value } = e.target;

    console.log(id, value);
    setParams((prev) => {
      return {
        ...prev,
        [id]: Number(value),
      };
    });
  };

  const props = {
    onlineGuideList,
    handleClickOnCard,
    GUIDE_FILTER_CATEGORYS,
    params,
    activeFilter,
    handleActiveFilter,
    handleInputTextChange,
  };
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
