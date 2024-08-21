import bg from "../../assets/image/tempBG.jpg";

export default function RecommendCard({ areaname, imgUrl, handleClickCard }) {
  return (
    <>
      <div
        className="w-[300px] h-[223px] flex flex-col gap-[10px]"
        onClick={handleClickCard}
      >
        <img className="rounded-2xl" src={imgUrl} alt="지역 이미지" />
        <div className="ml-[10px] font-bold text-black">{areaname}</div>
      </div>
    </>
  );
}
