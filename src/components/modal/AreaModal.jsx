import { useState } from "react";
import AreaModalView from "./AreaModalView";
import { AreaCode } from "../../data/AreaCode";

export default function AreaModal({ isVisible, onChoose, onClose }) {
  const [selected, setSelected] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelected = (areaCode) => {
    setSelected(areaCode);
  };

  // 검색어에 따라 필터링된 지역 리스트
  const filteredAreas = AreaCode.filter((area) => {
    if (!area.sigunguCode) {
      return area.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  });

  // 검색어 입력 핸들러
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const props = {
    isVisible,
    onChoose,
    onClose,
    selected,
    handleSelected,
    searchTerm,
    handleSearchChange,
    filteredAreas,
  };

  return <AreaModalView {...props} />;
}
