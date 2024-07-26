import bg from "../../assets/image/tempBG.jpg";

export default function RecommendCard({ areaname, handleClickCard }) {
  return (
    <>
      <div
        className="w-[300px] h-[223px] flex flex-col gap-[10px]"
        onClick={handleClickCard}
      >
        <img className="rounded-2xl" src={bg} alt="areaImage" />
        <div className="ml-[10px] font-bold text-black">{areaname}</div>
      </div>
    </>
  );
}
