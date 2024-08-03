import { useEffect, useState } from "react";
import OfflineGuideView from "./OfflineGuideView";
import { getOfflineGuideList } from "../../api/AuthApi";
import GuideModal from "../../components/common/GuideModal";
import { GUIDE_FILTER_CATEGORYS } from "../../data/Filter";

export default function OfflineGuide() {
  const [offlineGuideList, setList] = useState([]);
  const [guideModal, setGuideModal] = useState(false);
  const [clickGuideInfo, setClickGuideInfo] = useState([]);
  const [activeFilter, setActiveFilter] = useState(-1);
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
    getOfflineGuideList({ ...sanitizedParams })
      .then((response) => {
        setList(response.content);
      })
      .catch((error) => {
        console.log("오프라인 가이드 조회 실패", error);
      });
  };

  useEffect(() => {
    // 초기 화면 로딩 시
    fetchGuideList();
  }, []);

  const applyFilters = () => {
    // 필터 적용 시 다시 api get
    fetchGuideList();
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
    offlineGuideList,
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
      <OfflineGuideView {...props} />
      <GuideModal
        isVisible={guideModal}
        guideInfo={clickGuideInfo}
        onClose={handleOnClose}
      />
    </>
  );
}
