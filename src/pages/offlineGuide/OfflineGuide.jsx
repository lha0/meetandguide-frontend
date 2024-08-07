import { useEffect, useState } from "react";
import OfflineGuideView from "./OfflineGuideView";
import { getOfflineGuideList } from "../../api/AuthApi";
import GuideModal from "../../components/common/GuideModal";
import { GUIDE_FILTER_CATEGORYS } from "../../data/Filter";
import { AreaCode } from "../../data/AreaCode";
import AreaModal from "../../components/modal/AreaModal";
import Loading from "../../components/common/Loading";

export default function OfflineGuide() {
  const [offlineGuideList, setList] = useState([]);
  const [areaModal, setAreaModal] = useState(true);
  const [guideModal, setGuideModal] = useState(false);
  const [clickGuideID, setClickGuideID] = useState(-1);
  const [activeFilter, setActiveFilter] = useState(-1);
  //필터링 적용 시 로딩화면
  // const [loadFilter, setLoadFilter] = useState(false);
  const [areaName, setAreaName] = useState("");
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

  useEffect(() => {
    // 필터 적용 시 list update
    // setLoadFilter(true);
    fetchGuideList();
    // setLoadFilter(false);

    //지역 이름 변경
    setAreaName(
      AreaCode.filter(
        (item, idx) =>
          item.areaCode == params.areaCode && item.sigunguCode == null
      )[0].name
    );
  }, [params]);

  const handleClickOnCard = (guideId) => {
    setGuideModal(true);
    setClickGuideID(guideId);
  };
  const handleOnClose = () => {
    setGuideModal(false);
    setClickGuideID(-1);
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

  // 지역 선택 모달
  const handleClickOnAreaSel = () => {
    setAreaModal(true);
  };

  const handleOnAreaClose = () => {
    setAreaModal(false);
  };

  const handleOnChooseBtn = (value) => {
    setParams((prev) => {
      return { ...prev, ["areaCode"]: value };
    });
    setAreaModal(false);
  };

  const props = {
    offlineGuideList,
    handleClickOnAreaSel,
    handleClickOnCard,
    GUIDE_FILTER_CATEGORYS,
    params,
    areaName,
    activeFilter,
    handleActiveFilter,
    handleInputTextChange,
  };

  return (
    <>
      <OfflineGuideView {...props} />
      <GuideModal
        isVisible={guideModal}
        guideID={clickGuideID}
        onClose={handleOnClose}
      />
      <AreaModal
        isVisible={areaModal}
        onChoose={handleOnChooseBtn}
        onClose={handleOnAreaClose}
      />
    </>
  );
}
