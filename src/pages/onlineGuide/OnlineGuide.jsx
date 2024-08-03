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
    ageGoe: null,
    ageLoe: null,
    nickname: null,
    areaCode: null,
    sigunguCode: null,
    careerGoe: null,
    careerLoe: null,
    size: null,
    page: null,
    order: null,
  });

  const fetchGuideList = () => {
    const sanitizedParams = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [
        key,
        value === 0 ? null : value,
      ])
    );
    getOnlineGuideList({ ...sanitizedParams })
      .then((response) => {
        //console.log(response);
        setList(response.content);
      })
      .catch((error) => {
        console.log("온라인 가이드 조회 실패", error);
      });
  };

  useEffect(() => {
    // 초기 화면 로딩 시
    fetchGuideList();
  }, []);

  const applyFilters = () => {
    // 필터 적용 시 다시 api get
    console.log("params \n", params);
    fetchGuideList();
    console.log(onlineGuideList);
  };

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
    setActiveFilter((prev) => (prev === idx ? -1 : idx));
  };

  const handleInputTextChange = (e) => {
    const { id, value } = e.target;

    if (id === "order") {
      setParams((prev) => {
        return { ...prev, [id]: value };
      });
    } else {
      setParams((prev) => {
        return {
          ...prev,
          [id]: Number(value),
        };
      });
    }
  };

  const props = {
    onlineGuideList,
    handleClickOnCard,
    GUIDE_FILTER_CATEGORYS,
    params,
    activeFilter,
    handleActiveFilter,
    handleInputTextChange,
    applyFilters,
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
