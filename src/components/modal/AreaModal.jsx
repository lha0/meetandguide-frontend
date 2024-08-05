import { useState } from "react";
import AreaModalView from "./AreaModalView";

export default function AreaModal({ isVisible, onChoose, onClose }) {
  const [selected, setSelected] = useState(0);

  const handleSelected = (areaCode) => {
    setSelected(areaCode);
  };

  const props = {
    isVisible,
    onChoose,
    onClose,
    selected,
    handleSelected,
  };
  return <AreaModalView {...props} />;
}
