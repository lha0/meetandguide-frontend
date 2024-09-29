import Modal from "./Modal";

export default function AreaModalView({
  isVisible,
  onChoose,
  onClose,
  selected,
  handleSelected,
  searchTerm,
  handleSearchChange,
  filteredAreas,
}) {
  return (
    <Modal {...{ isVisible, onClose }}>
      <div className="w-[100%] h-[500px] flex flex-col items-center gap-[30px]">
        <h1 className="font-bold text-[16px] md:text-[20px]">
          원하는 여행 지역을 설정해주세요!
        </h1>
        <input
          type="search"
          onChange={handleSearchChange}
          placeholder="검색어를 입력해주세요"
          className="w-full px-4 py-4 rounded-2xl shadow-button text-[12px] md:text-[18px]"
        />
        <ul className="w-full overflow-auto">
          {filteredAreas.map((area, idx) => {
            if (!area.sigunguCode) {
              const isSelected = selected === area.areaCode;
              return (
                <li
                  key={idx}
                  onClick={() => handleSelected(area.areaCode)}
                  className={`px-1 py-2 text-[12px] md:text-[15px] ${
                    isSelected ? "bg-[#bbdefb]" : ""
                  }`}
                >
                  {area.name}
                </li>
              );
            }
          })}
        </ul>
        <button
          onClick={() => onChoose(selected)}
          className="px-6 py-2 rounded-2xl shadow-button text-[12px] md:text-[15px]"
        >
          선택
        </button>
      </div>
    </Modal>
  );
}
