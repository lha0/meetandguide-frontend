import Arrow from "../../assets/image/icon_arrow.png";

export default function MainSectionView({
  title,
  mainText,
  subText,
  img,
  buttonText,
  bgColor,
  url,
  idx,
  handleViewMoreClick,
  handleMoveToPage,
}) {
  const containerStyle = {
    backgroundColor: bgColor,
  };

  if (idx == 0) {
    return (
      <div
        style={containerStyle}
        className={`h-[720px] px-[162px] py-[180px] flex flex-col items-center]`}
      >
        <div className={`flex justify-around items-center]`}>
          <div className="flex flex-col justify-center gap-[20px]">
            <div className="font-bold text-[20px]"> {title} </div>
            <div className="max-w-[570px] font-bold text-[45px] break-all">
              {" "}
              {mainText}
            </div>
            <div className="text-[20px] text-gray"> {subText}</div>
          </div>
          <img src={img} className={`w-[400px] h-[400px]`} alt={`img ${idx}`} />
        </div>

        <button
          className="py-[45px] flex flex-col items-center gap-[7px] font-bold text-[15px]"
          onClick={handleViewMoreClick}
        >
          <div> {buttonText} </div>
          <img src={Arrow} className="w-[15px]" alt="move to detail" />
        </button>
      </div>
    );
  } else if (idx % 2 != 0) {
    return (
      <div
        style={containerStyle}
        className={`h-[720px] px-[162px] py-[180px] flex justify-around items-center]`}
      >
        <img src={img} className={`w-[400px] h-[400px]`} alt={`img ${idx}`} />
        <div className="flex flex-col justify-center gap-[20px]">
          <div className="font-bold text-[20px]"> {title} </div>
          <div className="max-w-[570px] font-bold text-[45px] break-all">
            {" "}
            {mainText}
          </div>
          <div className="text-[20px] text-gray"> {subText}</div>
          <button
            onClick={handleMoveToPage}
            className="max-w-[280px] rounded-2xl shadow-button py-4 font-bold text-[15px]"
          >
            {buttonText} {">>"}
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={containerStyle}
        className={`h-[720px] px-[162px] py-[180px] flex justify-around items-center`}
      >
        <div className="flex flex-col justify-center gap-[20px]">
          <div className="font-bold text-[20px]"> {title} </div>
          <div className="max-w-[570px] font-bold text-[45px] break-all">
            {" "}
            {mainText}
          </div>
          <div className="text-[20px] text-gray"> {subText}</div>
          <button
            onClick={handleMoveToPage}
            className="max-w-[280px] rounded-2xl shadow-button py-4 bg-[#ffffff] font-bold text-[15px]"
          >
            {buttonText} {"  >>"}
          </button>
        </div>
        <img src={img} className={`w-[400px] h-[400px]`} alt={`img ${idx}`} />
      </div>
    );
  }
}
