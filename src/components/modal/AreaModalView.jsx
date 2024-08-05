import { useState } from "react";
import Modal from "./Modal";
import { AreaCode } from "../../data/AreaCode";

export default function AreaModalView({
  isVisible,
  onChoose,
  onClose,
  selected,
  handleSelected,
}) {
  return (
    <Modal {...{ isVisible, onClose }}>
      <div className="w-[600px] h-[500px] flex flex-col items-center gap-[30px]">
        <h1 className="font-bold text-[20px]">
          원하는 여행 지역을 설정해주세요!
        </h1>
        <input
          type="search"
          placeholder="검색어를 입력해주세요"
          className="w-full px-4 py-4 rounded-2xl shadow-button"
        />
        <ul className="w-full overflow-auto">
          {AreaCode.map((area, idx) => {
            if (!area.sigunguCode) {
              const isSelected = selected === area.areaCode;
              return (
                <li
                  key={idx}
                  onClick={() => handleSelected(area.areaCode)}
                  className={`px-1 py-2 ${isSelected ? "bg-[#bbdefb]" : ""}`}
                >
                  {area.name}
                </li>
              );
            }
          })}
        </ul>
        <button
          onClick={() => onChoose(selected)}
          className="px-6 py-2 rounded-2xl shadow-button"
        >
          {" "}
          선택{" "}
        </button>
      </div>
    </Modal>
  );
}
