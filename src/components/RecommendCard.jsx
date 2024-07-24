import bg from "../assets/image/tempBG.jpg";

export default function RecommendCard({ areaname }) {
  return (
    <>
      <div className="w-[210px] h-[160px] relative">
        <img className="rounded-2xl" src={bg} alt="image" />
        <div className="pl-[10px] absolute top-1/2 left-1/2 transform -translate-x-24 -translate-y-36 font-bold text-[#ffffff]">
          {areaname}
        </div>
      </div>
    </>
  );
}
