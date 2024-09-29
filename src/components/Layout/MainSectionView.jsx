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

  if (idx === 0) {
    return (
      <div
        style={containerStyle}
        className={`h-[80%] px-[12%] py-[13%] flex flex-col justify-center items-center gap-[10%]`}
      >
        <div className={`flex justify-around items-center`}>
          <div className="flex flex-col justify-center gap-[3%] md:text-[20px]">
            <div className="font-bold text-[16px] md:text-[20px]">
              {" "}
              {title}{" "}
            </div>
            <div className="w-[80%] font-bold text-[24px] md:text-[45px] break-keep">
              {" "}
              {mainText}
            </div>
            <div className="text-[16px] md:text-[20px] text-gray">
              {" "}
              {subText}
            </div>
          </div>
          <img src={img} className={`w-[30%]`} alt={`img ${idx}`} />
        </div>

        <button
          className="flex flex-col items-center gap-[7px] font-bold text-[12px] md:text-[15px]"
          onClick={handleViewMoreClick}
        >
          <div> {buttonText} </div>
          <img src={Arrow} className="w-[22%]" alt="move to detail" />
        </button>
      </div>
    );
  } else if (idx % 2 !== 0) {
    return (
      <div
        style={containerStyle}
        className={`h-[80%] px-[12%] py-[13%] flex justify-around items-center`}
      >
        <img src={img} className={`w-[30%]`} alt={`img ${idx}`} />
        <div className="flex flex-col justify-center gap-[15px]">
          <div className="font-bold text-[16px] md:text-[20px]"> {title} </div>
          <div className="w-[80%] font-bold text-[24px] md:text-[45px] break-keep">
            {" "}
            {mainText}
          </div>
          <div className="text-[16px] md:text-[20px] text-gray break-keep">
            {" "}
            {subText}
          </div>
          <button
            onClick={handleMoveToPage}
            className="w-[47%] rounded-2xl shadow-button py-4 font-bold text-[10px] md:text-[15px] break-keep"
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
        className={`h-[80%] px-[12%] py-[13%] flex justify-around items-center`}
      >
        <div className="flex flex-col justify-center gap-[15px]">
          <div className="font-bold text-[16px] md:text-[20px]"> {title} </div>
          <div className="w-[80%] font-bold text-[24px] md:text-[45px] break-keep">
            {" "}
            {mainText}
          </div>
          <div className="text-[16px] md:text-[20px] text-gray break-keep">
            {" "}
            {subText}
          </div>
          <button
            onClick={handleMoveToPage}
            className="w-[47%] rounded-2xl shadow-button py-4 font-bold text-[10px] bg-white md:text-[15px] break-keep"
          >
            {buttonText} {"  >>"}
          </button>
        </div>
        <img src={img} className={`w-[30%]`} alt={`img ${idx}`} />
      </div>
    );
  }
}
