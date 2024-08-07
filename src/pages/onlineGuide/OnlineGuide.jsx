import { useEffect, useState } from "react";
import OnlineGuideView from "./OnlineGuideView";
import { getOnlineGuideList } from "../../api/AuthApi";
import GuideModal from "../../components/common/GuideModal";
import { GUIDE_FILTER_CATEGORYS } from "../../data/Filter";
import AreaModal from "../../components/modal/AreaModal";
import { AreaCode } from "../../data/AreaCode";

export default function OnlineGuide() {
  const [onlineGuideList, setList] = useState([]);
  const [areaModal, setAreaModal] = useState(true);
  const [guideModal, setGuideModal] = useState(false);
  const [clickGuideID, setClickGuideID] = useState(-1);
  const [activeFilter, setActiveFilter] = useState(-1);
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
    getOnlineGuideList({ ...sanitizedParams })
      .then((response) => {
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

  useEffect(() => {
    // 필터 적용 시 list update
    fetchGuideList();

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
    onlineGuideList,
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
      <OnlineGuideView {...props} />;
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
